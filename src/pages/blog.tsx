import React from "react";
import { PrismaClient } from "@prisma/client";

import Container from "@/components/atoms/Container";
import Title from "@/components/feature/blog/Title";

import useTags, { TagListCallback } from "@/hooks/blog/useTags";

const blog = (props: { tags: TagListCallback[] }) => {
  console.log(props.tags);
  return (
    <>
      <Title />
      <Container></Container>
    </>
  );
};

export const getServerSideProps = async () => {
  const tags = await useTags();

  return {
    props: {
      tags,
    },
  };
};

export default blog;
