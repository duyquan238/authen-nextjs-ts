import { User } from "./../interface/User";
import { useRef, useState } from "react";
import db from "../lib/firebase/config";

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
      const snapshot = await db.collection("users").get();
      let result: User[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({
          id: doc.id,
          email: doc.data().email,
          password: doc.data().password,
        });
      });
      console.log(result.find((result) => result.email === "test"));
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
