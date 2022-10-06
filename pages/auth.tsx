import Head from "next/head";
import React, { Fragment } from "react";
import AuthForm from "../components/auth/AuthForm";
import styles from "../styles/Auth.module.css";
type Props = {};

const AuthPage = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Head>
            <title>Welcome to NTT Data</title>
          </Head>
          <h1 className={styles.title}>
            Welcome to <span className={styles.companyTitle}>NTT Data!</span>
          </h1>
          <h2>Please log in to find out more interesting information!</h2>
        </div>
        <div className={styles.rightContainer}>
          <AuthForm />
        </div>
      </div>
    </Fragment>
  );
};

export default AuthPage;
