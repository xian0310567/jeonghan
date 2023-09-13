import React, { useState } from "react";

import { TagProps } from "./lib/Tag";

import { Container, Title } from "./lib/styled";

const Tag = (props: TagProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Container
      toggle={toggle}
      onClick={() => {
        props.onClick;
        setToggle((prev) => !prev);
      }}
    >
      <Title>{props.children}</Title>
    </Container>
  );
};

export default Tag;
