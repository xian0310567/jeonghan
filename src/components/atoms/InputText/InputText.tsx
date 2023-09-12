import React from "react";

import { InputTextProps } from "./lib/InputText";

import { Container, Input } from "./lib/styled";

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
