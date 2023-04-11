import React from "react";

import Card from "@/components/feature/home/Card";

import { CardViewProps } from "./lib/cardView.interface";

const CardView = ({ items }: CardViewProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default CardView;
