import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 7px;
  overflow: hidden;
  width: 267px;
  height: 360px;
  margin: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 15px #ddd;
  }
`;

export const ThumbNail = styled.div<{ image: string }>`
  width: 100%;
  height: 170px;
  /* background: #ccc; */
  background-image: url("${(props) => props.image}");
  background-size: cover;
`;

export const TextContainer = styled.div`
  padding: 20px;
  height: 155px;
  box-sizing: border-box;

  & > h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    color: #888;
  }
`;

export const Footer = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  border-top: 1px solid #eee;
  line-height: 1.2;
`;

export const CreateDate = styled.span`
  color: #888;
`;

export const LikeHeart = styled.div`
  opacity: 0.4;
  display: flex;

  & > span {
    margin-left: 4px;
    line-height: 1.3;
  }
`;
