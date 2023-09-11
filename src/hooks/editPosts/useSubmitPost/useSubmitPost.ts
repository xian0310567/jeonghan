import useSubmitPostState from "./useSubmitPostState";

import submitPostService from "./service/submitPostService";

import { SubmitPostCallback } from "./lib/useSubmitPost";

const useSubmitPost = (): SubmitPostCallback => {
  const state = useSubmitPostState();

  const { submitPost } = submitPostService(state);

  return { ...state, submitPost };
};

export default useSubmitPost;
