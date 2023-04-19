import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: NextApiRequest) => {
  const createPost = await prisma.posts.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      thumbnailImage: req.body.thumbnailImage,
    },
  });

  return createPost;
};
