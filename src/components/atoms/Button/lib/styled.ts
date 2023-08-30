import styled from "styled-components";

export default () => {
  const Button = styled.button<{ type: "primary" | "normal" }>`
    padding: 10px 30px;
    border: none;
    border-radius: 13px;
    background-color: ${(props) =>
      props.type === "primary" ? "#5178ee" : "#adadad"};
    color: #fff;
    cursor: pointer;
  `;

  return { Button };
};
