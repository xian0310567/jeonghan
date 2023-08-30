import React from "react";

import styled from "./lib/styled";

import { ButtonProps } from "./lib/Button";

const { Button } = styled();

const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
      style={props.style}
      onClick={props.onClick}
      type={props.type ?? "normal"}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
