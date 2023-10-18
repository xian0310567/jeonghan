export type CommentsStateCallback = {
  comments: CommentResponse[];
  setComments: React.Dispatch<SetStateAction<CommentResponse[]>>;
};

export type CommentResponse = {
  id: number;
  postID: number;
  commenter: string;
  comments: string;
  createdAt: string;
};
