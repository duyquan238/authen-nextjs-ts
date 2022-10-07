import React, { Fragment } from "react";
import Header from "./Header";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
type Props = {
  session?: Session;
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Fragment>
      {props.session && <Header />}
      {props.children}
    </Fragment>
  );
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }

export default Layout;
