import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getComments = async (req: NextApiRequest, res: NextApiResponse) => {
  const { post } = req.query;

  // if (!post) return res.status(400).send("not found post");

  const queryCondition = post
    ? { where: { postID: parseInt(post + "") } }
    : undefined;

  const originComments = await prisma.comments.findMany(queryCondition);

  const comments = originComments.map((comment) => {
    return {
      id: comment.id,
      postID: comment.postID,
      commenter: comment.commenter,
      comments: comment.comments,
      createdAt: comment.createdAt,
    };
  });

  return res.status(200).send(comments);
};

export default getComments;
