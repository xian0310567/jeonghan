import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postList = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.posts.findMany();

  return res.status(200).send(posts);
};

export default postList;
