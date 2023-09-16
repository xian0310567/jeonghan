import React from "react";
import _ from "lodash";

import Post from "@/components/feature/blog/Post";

import { PostsViewProps } from "./lib/PostsView";

const PostsView = (props: PostsViewProps) => {
  return (
    <>
      {_.map(props.posts, (post) => (
        <Post posts={post} key={post.id} />
      ))}
    </>
  );
};

export default PostsView;
