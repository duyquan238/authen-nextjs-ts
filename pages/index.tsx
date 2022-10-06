import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">NTT Data!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
