import React from "react";

import Header from "@/components/atoms/Header";
import PostTags from "@/components/feature/blog/PostTags";

const Title = () => {
  return (
    <div>
      <Header title="Blog">
        <PostTags />
      </Header>
    </div>
  );
};

export default Title;
