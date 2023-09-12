import useSubmitPostState from "./useSubmitPostState";

import useSubmitPostService from "./service/submitPostService";

import { SubmitPostCallback } from "./lib/useSubmitPost";

const useSubmitPost = (): SubmitPostCallback => {
  const state = useSubmitPostState();

  const { usePublishPost } = useSubmitPostService(state);

  return { ...state, usePublishPost };
};

export default useSubmitPost;
