import { User } from "./../interface/User";
import { useRef, useState } from "react";
import db from "../lib/firebase/config";
import { signIn } from "next-auth/react";
import Router from "next/router";

async function createUser(email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

const useAuth = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const switchAuthModeHandler = () => {
    setIsLogin((preState) => !preState);
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (result) {
        Router.push("/");
      }
    } else {
      try {
        if (enteredEmail && enteredPassword) {
          const result = await createUser(enteredEmail, enteredPassword);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    isLogin,
    emailInputRef,
    passwordInputRef,
    switchAuthModeHandler,
    submitHandler,
  };
};

export default useAuth;
