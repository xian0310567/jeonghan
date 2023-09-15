import React from "react";

import Card from "@/components/feature/home/Card";

import { PostsCallback } from "@/hooks/blog/usePosts";

import styled from "./lib/cardView.module.css";

const CardView = (props: { posts: PostsCallback }) => {
  return (
    <div className={styled.container}>
      {props.posts.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default CardView;
