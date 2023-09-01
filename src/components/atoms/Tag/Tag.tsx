import React from "react";

import styled from "./lib/styled";

import { TagProps } from "./lib/Tag";

const { Container, Title } = styled();

const Tag = (props: TagProps) => {
  return (
    <Container pointer={!!props.onClick ?? false} onClick={props.onClick}>
      <Title>{props.children}</Title>
    </Container>
  );
};

export default Tag;
