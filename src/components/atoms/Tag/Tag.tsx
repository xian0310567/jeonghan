import React from "react";

import { TagProps } from "./lib/Tag";

import { Container, Title } from "./lib/styled";

const Tag = (props: TagProps) => {
  return (
    <Container pointer={!!props.onClick ?? false} onClick={props.onClick}>
      <Title>{props.children}</Title>
    </Container>
  );
};

export default Tag;
