import Head from "next/head";
import React, { Fragment } from "react";
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
        </div>
        <div className={styles.rightContainer}>Login</div>
      </div>
    </Fragment>
  );
};

export default AuthPage;
