import React from "react";

import TextInput from "@/components/atoms/InputText";

import styled from "./lib/styled";

const { Container } = styled();

const PostTitleEditor = () => {
  return (
    <Container>
      <TextInput placeholder="제목을 입력해주세요.">제목</TextInput>
    </Container>
  );
};

export default PostTitleEditor;
