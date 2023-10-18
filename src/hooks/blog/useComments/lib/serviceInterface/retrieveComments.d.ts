import { CommentResponse } from "../useCommentsState";

export type RetrieveCommentsCallback = {
  retrieveComments: (post: number) => Promise<RetrieveCommentsResponse>;
};

export type RetrieveCommentsResponse = CommentResponse;
