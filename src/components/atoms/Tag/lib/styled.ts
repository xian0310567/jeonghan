import styled from "styled-components";

export default () => {
  const Container = styled.div<{ pointer: boolean }>`
    background-color: #5178ee;
    padding: 6px 12px;
    display: inline-block;
    border-radius: 20px;
    cursor: ${(props) => (props.pointer ? "pointer" : "normal")};
  `;

  const Title = styled.span`
    color: #fff;
    font-size: 13px;
  `;

  return { Container, Title };
};
