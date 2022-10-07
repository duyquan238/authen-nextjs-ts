import "../styles/globals.css";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
