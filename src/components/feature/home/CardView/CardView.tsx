import React from "react";
import _ from "lodash";

import Card from "@/components/feature/home/Card";

import { PostsCallback } from "@/hooks/blog/usePosts";

import styled from "./lib/cardView.module.css";

const CardView = (props: { posts: PostsCallback[] }) => {
  return (
    <div className={styled.container}>
      {_.map(props.posts, (post, index) => (
        <Card item={post} key={index} />
      ))}
    </div>
  );
};

export default CardView;
