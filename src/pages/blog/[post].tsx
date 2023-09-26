import React from "react";
import dynamic from "next/dynamic";

import Container from "@/components/atoms/Container";
import CommentViewer from "@/components/feature/blogPost/CommentViewer";

import usePost from "@/hooks/blog/usePost";

import { GetServerSideProps } from "next";
import { PostsCallback } from "@/hooks/blog/usePosts";

const MarkdownViewer = dynamic(
  () => import("@/components/feature/blogPost/MarkdownViewer"),
  { ssr: false }
);

const post = (props: { post: PostsCallback }) => {
  return (
    <Container>
      <MarkdownViewer post={props.post}/>
      <CommentViewer />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId =
    typeof params!.post === "string" ? parseInt(params!.post, 10) : 0;

  const post = await usePost(postId);

  return {
    props: {
      post,
    },
  };
};

export default post;
