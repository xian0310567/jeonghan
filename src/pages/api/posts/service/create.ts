import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const createPost = await prisma.posts.create({
    data: {
      title: req.body.title,
      contents: req.body.contents,
      thumbnailImage: req.body.thumbnailImage,
    },
  });

  return res.status(200).send(createPost);
};

export default create;
