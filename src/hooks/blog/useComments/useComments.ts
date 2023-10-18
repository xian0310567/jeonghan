import useCommentsState from "./useCommentsState";
import useCommentsService from "./services";

import { CommentsCallback } from "./lib/useComments";

const useComments = (): CommentsCallback => {
  const state = useCommentsState();
  const service = useCommentsService(state);

  return {
    ...state,
    ...service,
  };
};

export default useComments;
