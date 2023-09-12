import React from "react";

import { ButtonProps } from "./lib/Button";

import { Button } from "./lib/styled";

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
