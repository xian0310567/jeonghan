import { useState } from "react";

import { Posts } from "@prisma/client";
import { PostsStateCallback } from "./lib/usePostsState";

const usePostsState = (): PostsStateCallback => {
  const [posts, setPosts] = useState<Posts[]>();

  return {
    posts: {
      get: () => posts,
      set: setPosts,
    },
  };
};

export default usePostsState;
