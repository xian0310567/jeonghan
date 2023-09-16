import _ from "lodash";
import { PrismaClient } from "@prisma/client";

import { PostsCallback, PostsResponse } from "@/hooks/blog/usePosts";

const usePost = async (postKey: number): Promise<PostsCallback> => {
  const prisma = new PrismaClient();

  const res: PostsResponse | null = await prisma.posts.findUnique({
    include: {
      tag: {
        select: {
          tag: true,
        },
      },
    },
    where: {
      id: postKey,
    },
  });

  const post = {
    ...res,
    tag: _.map(res?.tag, (tag) => tag.tag),
  };

  return JSON.parse(JSON.stringify(post));
};

export default usePost;
