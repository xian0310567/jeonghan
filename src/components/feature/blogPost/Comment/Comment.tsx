import React from "react";
import profile from "@/assets/profile.png";

import {
  Container,
  ProfileImage,
  ContentGrid,
  Space,
  Name,
  Date,
  Content,
} from "./lib/styled";

import { CommentProps } from "./lib/Comment";

const Comment = (props: CommentProps) => {
  const comment = props.comment;

  return (
    <Container>
      <ProfileImage src={profile} alt="댓글 쓴 이" width={50} height={50} />
      <ContentGrid>
        <Space>
          <Name>{comment.commenter}</Name>
          <Date>{comment.createdAt.slice(0, 10)}</Date>
        </Space>
        <Content>{comment.comments}</Content>
      </ContentGrid>
    </Container>
  );
};

export default Comment;
