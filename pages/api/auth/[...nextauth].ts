import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../interface/User";
import { verifyPassword } from "../../../lib/auth/auth";
import db from "../../../lib/firebase/config";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const snapshot = await db.collection("users").get();
        let result: User[] = [];
        snapshot.docs.forEach((doc) => {
          result.push({
            id: doc.id,
            email: doc.data().email,
            password: doc.data().password,
          });
        });
        const user = result.find(
          (result) => result.email === credentials!.email
        );
        if (!user) {
          throw new Error(`Could not find user`);
        }
        const isValid = await verifyPassword(
          credentials!.password,
          user.password
        );
        if (!isValid) {
          throw new Error(`Could not log you in`);
        }
        return {
          email: user.email,
        };
      },
    }),
  ],
});
