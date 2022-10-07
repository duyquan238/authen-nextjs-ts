import React from "react";
import styles from "./Header.module.css";
import { signOut } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  function logoutHandler() {
    signOut();
  }
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>NTT Data</h1>
      </div>
      <div className={styles.actions}>
        <h2 className={styles.button} onClick={logoutHandler}>
          Logout
        </h2>
      </div>
    </div>
  );
};

export default Header;
