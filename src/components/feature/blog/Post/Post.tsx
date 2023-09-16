import React from "react";
import { useRouter } from "next/router";

import { PostsProps } from "./lib/Post";

import {
  Container,
  Thumbnail,
  TitleContainer,
  Title,
  Body,
} from "./lib/styled";

const Post = (props: PostsProps) => {
  const router = useRouter();

  const handleRoute = () => router.push(`/blog/${props.posts.id}`);

  const post = props.posts;

  return (
    <Container>
      <Thumbnail image={post.thumbnailImage} onClick={handleRoute} />
      <TitleContainer>
        <Title onClick={handleRoute}>{post.title}</Title>
        <Body onClick={handleRoute}>{post.contents}</Body>
      </TitleContainer>
    </Container>
  );
};

export default Post;
