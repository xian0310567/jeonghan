import React from "react";
import dynamic from "next/dynamic";

import SubmitPost from "@/components/feature/editPosts/SubmitPost";
import PostTitleEditor from "@/components/feature/editPosts/PostTitleEditor";

const DynamicEditor = dynamic(
  () => import("@/components/feature/editPosts/MarkdownEditor"),
  { ssr: false }
);

const editPosts = () => {
  return (
    <div>
      <PostTitleEditor />
      <DynamicEditor />
      <SubmitPost />
    </div>
  );
};

export default editPosts;
