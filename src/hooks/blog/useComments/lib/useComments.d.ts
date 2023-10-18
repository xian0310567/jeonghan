import { CommentsStateCallback } from "./useCommentsState";
import { CommentsServiceCallback } from "./useCommentsService";

// export type CommentsCallback = CommentsStateCallback & CommentsServiceCallback;
export type CommentsCallback = CommentsServiceCallback;
