import { useState } from "react";

import { CommentsStateCallback, CommentResponse } from "./lib/useCommentsState";

const useCommentsState = (): CommentsStateCallback => {
  const [comments, setComments] = useState<CommentResponse[]>([]);

  return {
    comments,
    setComments,
  };
};

export default useCommentsState;
