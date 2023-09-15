import React from "react";

import Tag from "@/components/atoms/Tag";

import { PostTagsProps } from "./lib/PostTags";

const PostTags = (props: PostTagsProps) => {
  return (
    <div>
      {props.tags.map((tag, index) => (
        <Tag key={index} length={tag.length}>
          #{tag.tag}
        </Tag>
      ))}
    </div>
  );
};

export default PostTags;
