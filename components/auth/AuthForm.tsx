import { Box, Button, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../shared/CustomButton";
import CustomInput from "../shared/CustomInput";
import styles from "./AuthForm.module.css";
type Props = {};

const AuthForm = (props: Props) => {
  const {
    isLogin,
    emailInputRef,
    passwordInputRef,
    switchAuthModeHandler,
    submitHandler,
  } = useAuth();

  return (
    <div className={styles.authContainer}>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <Box component="form" className="form" onSubmit={submitHandler}>
        {/* <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          type="text"
        />
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          type="password"
        /> */}

        <TextField
          inputRef={emailInputRef}
          label="Email"
          variant="standard"
          fullWidth={true}
          className={styles.input}
        />
        <TextField
          inputRef={passwordInputRef}
          label="Password"
          variant="standard"
          fullWidth={true}
          type="password"
          className={styles.input}
        />

        <div className={styles.actionWrapper}>
          {/* <CustomButton type="button" color="primary" size="md">
            {isLogin ? "Login" : "Sign up"}
          </CustomButton> */}
          <Button type="submit" color="primary" variant="outlined">
            {isLogin ? "Login" : "Sign up"}
          </Button>
          <Link href="#" underline="none" onClick={switchAuthModeHandler}>
            {isLogin ? `Don't have account? Sign up` : "Sign in"}
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default AuthForm;
