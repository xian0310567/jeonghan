import React from "react";

import styled from "./lib/styled";

import { InputTextProps } from "./lib/InputText";

const { Container, Input } = styled();

const InputText = (props: InputTextProps) => {
  return (
    <Container style={props.style}>
      <Input
        value={props.value}
        placeholder={props.placeholder}
        width={props.width}
        onChange={props.onChange}
      />
    </Container>
  );
};

export default InputText;
