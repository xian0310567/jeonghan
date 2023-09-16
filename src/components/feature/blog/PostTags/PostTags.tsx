import React from "react";
import _ from "lodash";

import Tag from "@/components/atoms/Tag";

import { PostTagsProps } from "./lib/PostTags";

const PostTags = (props: PostTagsProps) => {
  return (
    <div>
      {_.map(props.tags, (tag, index) => (
        <Tag key={index} length={tag.length}>
          #{tag.tag}
        </Tag>
      ))}
    </div>
  );
};

export default PostTags;
