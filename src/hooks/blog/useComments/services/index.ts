import retrieveCommentsService from "./retrieveComments";

import { CommentsServiceCallback } from "../lib/useCommentsService";
import { CommentsStateCallback } from "../lib/useCommentsState";

const index = (state: CommentsStateCallback): CommentsServiceCallback => {
  const { retrieveComments } = retrieveCommentsService(state);

  return {
    retrieveComments,
  };
};

export default index;
