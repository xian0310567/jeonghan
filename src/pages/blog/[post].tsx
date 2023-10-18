import React from "react";
import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";

import Container from "@/components/atoms/Container";
import CommentViewer from "@/components/feature/blogPost/CommentViewer";

import usePost from "@/hooks/blog/usePost";

import { GetServerSideProps } from "next";
import { PostsCallback } from "@/hooks/blog/usePosts";
import { CommentResponse } from "@/hooks/blog/useComments";

const MarkdownViewer = dynamic(
  () => import("@/components/feature/blogPost/MarkdownViewer"),
  { ssr: false }
);

const post = (props: { post: PostsCallback; comments: CommentResponse }) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <Container>
        <MarkdownViewer post={props.post} />
        <CommentViewer />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId =
    typeof params!.post === "string" ? parseInt(params!.post, 10) : 0;

  const post = await usePost(postId);
  const comments = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/comments?post=${postId}`
  );

  return {
    props: {
      post,
      comments: comments.data,
    },
  };
};

export default post;
