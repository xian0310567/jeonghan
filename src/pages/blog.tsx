import React from "react";

import Container from "@/components/atoms/Container";
import Title from "@/components/feature/blog/Title";

import useTags, { TagListCallback } from "@/hooks/blog/useTags";
import usePosts from "@/hooks/blog/usePosts";

import { Posts } from "@prisma/client";

const blog = (props: { tags: TagListCallback[]; posts: Posts[] }) => {
  console.log(props.posts);
  return (
    <>
      <Title tags={props.tags} />
      <Container></Container>
    </>
  );
};

export const getServerSideProps = async () => {
  const tags = await useTags();
  const posts = await usePosts();

  return {
    props: {
      tags,
      posts,
    },
  };
};

export default blog;
