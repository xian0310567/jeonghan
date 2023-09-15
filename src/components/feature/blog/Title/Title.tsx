import React from "react";

import Header from "@/components/atoms/Header";
import PostTags from "@/components/feature/blog/PostTags";

import { TitleProps } from "./lib/Title";

const Title = (props: TitleProps) => {
  return (
    <div>
      <Header title="Blog">
        <PostTags tags={props.tags} />
      </Header>
    </div>
  );
};

export default Title;
