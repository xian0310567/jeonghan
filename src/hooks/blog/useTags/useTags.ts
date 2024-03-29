import _ from "lodash";
import { PrismaClient } from "@prisma/client";

import { TagListCallback } from "./lib/useTags";

const useTags = async () => {
  const prisma = new PrismaClient();

  const tags = await prisma.tag.groupBy({
    by: ["tag"],
    _count: {
      tag: true,
    },
  });

  const response: TagListCallback[] = _.map(tags, (tag) => {
    return { tag: tag.tag, length: tag._count.tag };
  });

  return response;
};

export default useTags;
