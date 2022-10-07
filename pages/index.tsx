import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Header from "../components/layout/Header";
import { Session } from "next-auth";

type Props = {
  session: Session;
};

const Home = (props: Props) => {
  const user = props.session.user;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Hi {user?.email}</h1>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.nttdata.com/vn/en">NTT Data!</a>
        </h1>
      </main>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Home;
