import React from "react";

import Card from "@/components/feature/home/Card";

import { CardViewProps } from "./lib/cardView.interface";

import styled from "./lib/cardView.module.css";

const CardView = ({ items }: CardViewProps) => {
  return (
    <div className={styled.container}>
      {items.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default CardView;
