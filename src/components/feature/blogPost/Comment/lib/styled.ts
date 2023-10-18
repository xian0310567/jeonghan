import styled from "styled-components";

import Image from "next/image";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
`;

export const ProfileImage = styled(Image)`
  border-radius: 30px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-rows: 30px auto 20px;
`;

export const Space = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

export const Date = styled.p`
  font-size: 12px;
  color: #888;
`;

export const Content = styled.p`
  margin-top: 5px;
  color: #444;
`;
