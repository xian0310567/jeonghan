import React from "react";
import _ from "lodash";

import Post from "@/components/feature/blog/Post";

import { PostsViewProps } from "./lib/PostsView";

const PostsView = (props: PostsViewProps) => {
  return (
    <>
      {props.posts.map((post) => (
        <Post posts={post} key={post.id} />
      ))}
    </>
  );
};

export default PostsView;
