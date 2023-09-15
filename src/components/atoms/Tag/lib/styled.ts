import styled from "styled-components";

export const Container = styled.div<{ toggle: boolean }>`
  background-color: ${(props) => (props.toggle ? "#5178ee" : "#a0b2e8")};
  padding: 6px 12px;
  margin: 0 10px 10px 0;
  display: inline-block;
  border-radius: 20px;
  cursor: pointer;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 13px;
  margin-right: 5px;
`;

export const Count = styled.span`
  color: #cacaca;
  font-size: 13px;
`;
