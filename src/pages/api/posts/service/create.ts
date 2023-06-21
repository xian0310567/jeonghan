import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const createPost = await prisma.posts.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      thumbnailImage: req.body.thumbnailImage,
    },
  });

  return res.status(200).send(createPost);
};
