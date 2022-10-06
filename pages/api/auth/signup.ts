import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../interface/User";
import db from "../../../lib/firebase/config";
import { hashPassword } from "../../../lib/auth/auth";

type Data = {
  message: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: User;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message: "Invalid input",
      });
      return;
    }
    const snapshot = await db.collection("users").get();
    let result: User[] = [];
    snapshot.docs.forEach((doc) => {
      result.push({
        id: doc.id,
        email: doc.data().email,
        password: doc.data().password,
      });
    });

    const existingUser = result.find((result) => result.email === email);
    if (existingUser) {
      res.status(422).json({ message: "User exists already!!!" });
      return;
    }
    const randomId = new Date().getTime().toString();
    const encryptedPassword = await hashPassword(password);
    const data = { email: email, password: encryptedPassword };
    const response = await db.collection("users").doc(randomId).set(data);
    res.status(200).json({ message: "Created User!!!" });
  }
}
