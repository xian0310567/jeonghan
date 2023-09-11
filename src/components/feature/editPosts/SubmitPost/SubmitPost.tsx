import React from "react";

import Button from "@/components/atoms/Button";

import { SubmitPostProps } from "./lib/SubmitPost";

import styled from "./lib/styled";

const { Container } = styled();

const SubmitPost = (props: SubmitPostProps) => {
  return (
    <Container>
      <Button style={{ marginRight: "5px" }}>취소</Button>
      <Button type="primary" onClick={props.submitPost}>
        출간
      </Button>
    </Container>
  );
};

export default SubmitPost;
