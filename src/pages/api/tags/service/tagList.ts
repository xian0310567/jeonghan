import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

interface TagListCallback {
  tag: string;
  length: number;
}

interface TagMaps {
  tag: string;
  _count: {
    tag: number;
  }
}

const prisma = new PrismaClient();

const tagList = async (req: NextApiRequest, res: NextApiResponse) => {
  const tags = await prisma.tag.groupBy({
    by: ["tag"],
    _count: {
      tag: true,
    },
  });

  const response: TagListCallback[] = await tags.map((tag: TagMaps) => {
    return { tag: tag.tag, length: tag._count.tag };
  });

  return res.status(200).send(JSON.parse(JSON.stringify(response)));
};

export default tagList;
