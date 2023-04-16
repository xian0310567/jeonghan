import React from "react";
import Image from "next/image";

import { CardProps } from "./lib/Card.interface";

import heart from "@/assets/heart.svg";

import styled from "./lib/card.module.css";

const Card = ({ item }: { item: CardProps }) => {
  return (
    <div className={styled.card}>
      <div className={styled.thumbNail} />
      <div className={styled.text}>
        <h4>{item.title}</h4>
        <span className="">{item.body}</span>
      </div>
      <div className={styled.footer}>
        <span className={styled.date}>{item.date}</span>
        <div className={styled.like}>
          <Image src={heart} alt="" width={16} height={16} />
          <span>{item.heartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
