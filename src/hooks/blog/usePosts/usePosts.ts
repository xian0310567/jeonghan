import { PrismaClient } from "@prisma/client";

import { PostsCallback } from "./lib/usePosts";

const usePosts = async (): Promise<PostsCallback> => {
  const prisma = new PrismaClient();

  const posts: PostsCallback = await prisma.posts.findMany();

  return JSON.parse(JSON.stringify(posts));
};

export default usePosts;
