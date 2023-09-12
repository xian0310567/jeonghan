import { useState } from "react";
import axios from "axios";

import { Posts } from "@prisma/client";
import { PostsStateCallback } from "./lib/usePostsState";

const usePostsServer = (state: PostsStateCallback): Posts[] | undefined => {
  const [data, setData] = useState<Posts[]>();

  axios.get("/api/posts").then((res) => {
    state.posts.set(res.data);
    setData(res.data);
  });

  return data;
};

export default usePostsServer;
