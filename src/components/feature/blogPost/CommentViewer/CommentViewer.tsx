import React from "react";

import { Title, Divider } from "./lib/styled";
import Comment from "@/components/feature/blogPost/Comment";

import { CommentViewerProps } from "./lib/CommentViewer";

const CommentViewer = (props: CommentViewerProps) => {
  return (
    <>
      <Title>댓글 {props.comments.length}</Title>
      <Divider />
      {/* <Comment comment={props.comments[0]} /> */}
    </>
  );
};

export default CommentViewer;
