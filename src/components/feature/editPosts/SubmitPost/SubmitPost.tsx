import React from "react";

import Button from "@/components/atoms/Button";

import styled from "./lib/styled";

const { Container } = styled();

const SubmitPost = () => {
  return (
    <Container>
      <Button style={{ marginRight: "5px" }}>취소</Button>
      <Button type="primary">출간</Button>
    </Container>
  );
};

export default SubmitPost;
