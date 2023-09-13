import React from "react";

import Container from "@/components/atoms/Container";

import { HeaderProps } from "./lib/Header";

import { Background, Title } from "./lib/styled";

const Header = (props: HeaderProps) => {
  return (
    <Background>
      <Container>
        <Title>{props.title}</Title>
        {props.children}
      </Container>
    </Background>
  );
};

export default Header;
