import usePostsState from "./usePostsState";
import usePostsServer from "./usePostsServer";

import { PostsCallback } from "./lib/usePosts";

const usePosts = (): PostsCallback => {
  const state = usePostsState();
  const server = usePostsServer(state);

  return state;
};

export default usePosts;
