import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const createUser = await prisma.user.create({
    data: {
      email: "as1df@asdf.com",
      name: "이정한1",
    },
  });
  res.send({ createUser });
}
