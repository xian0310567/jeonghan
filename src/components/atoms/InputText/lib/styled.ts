import styled from "styled-components";

import { InputTextProps } from "./InputText";

export const Container = styled.div``;
export const Input = styled.input<InputTextProps>`
  min-width: ${(props) => (props.width ? props.width + "em" : "200px")};
  border-radius: 10px;
  border: 1px solid #adadad;
  background-color: #fff;
  padding: 7px 10px;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;
