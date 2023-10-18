import { useEffect } from "react";
import axios from "axios";

import { CommentsStateCallback } from "../lib/useCommentsState";
import { RetrieveCommentsCallback } from "../lib/serviceInterface/retrieveComments";

const service = (state: CommentsStateCallback): RetrieveCommentsCallback => {
  const retrieveComments = async (post: number) => {
    const comments = await axios.get(`/api/comments?post=${post}`);

    useEffect(() => {
      state.setComments(comments.data);
    }, [comments.data]);

    return comments.data;
  };

  return { retrieveComments };
};

export default service;
