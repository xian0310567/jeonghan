import React from "react";
import Image from "next/image";

import { CardProps } from "./lib/Card";

import heart from "@/assets/heart.svg";

import {
  Container,
  ThumbNail,
  TextContainer,
  Footer,
  CreateDate,
  LikeHeart,
} from "./lib/styled";

const Card = ({ item }: { item: CardProps }) => {
  return (
    <Container>
      <ThumbNail image={item.thumbnailImage} />
      <TextContainer>
        <h4>{item.title}</h4>
        <span>{item.contents}</span>
      </TextContainer>
      <Footer>
        <CreateDate>{item.createdAt.toString()}</CreateDate>
        <LikeHeart>
          <Image src={heart} alt="" width={16} height={16} />
          <span>{item.heartCount}</span>
        </LikeHeart>
      </Footer>
    </Container>
  );
};

export default Card;
