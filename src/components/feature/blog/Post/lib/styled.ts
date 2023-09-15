import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 265px auto;
  padding: 25px 0;
  border-bottom: 1px solid #ddd;
`;

export const Thumbnail = styled.div<{ image: string }>`
  width: 265px;
  height: 170px;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h3`
  color: #222;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Body = styled.p`
  max-width: 600px;
  color: #999;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  cursor: pointer;
`;
