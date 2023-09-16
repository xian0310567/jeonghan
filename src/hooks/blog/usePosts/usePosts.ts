import _ from "lodash";
import { PrismaClient } from "@prisma/client";

import { PostsResponse, PostsCallback } from "./lib/usePosts";

const usePosts = async (): Promise<PostsCallback[]> => {
  const prisma = new PrismaClient();

  const res: PostsResponse[] = await prisma.posts.findMany({
    include: {
      tag: {
        select: {
          tag: true,
        },
      },
    },
  });

  const posts: PostsCallback[] = _.map(res, (post) => {
    return {
      ...post,
      tag: _.map(post.tag, (tag) => {
        return tag.tag;
      }),
    };
  });

  return JSON.parse(JSON.stringify(posts));
};

export default usePosts;
