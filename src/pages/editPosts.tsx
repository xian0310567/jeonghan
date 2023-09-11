import React from "react";
import dynamic from "next/dynamic";

import SubmitPost from "@/components/feature/editPosts/SubmitPost";
import PostTitleEditor from "@/components/feature/editPosts/PostTitleEditor";

import useSubmitPost from "@/hooks/editPosts/useSubmitPost";

const DynamicEditor = dynamic(
  () => import("@/components/feature/editPosts/MarkdownEditor"),
  { ssr: false }
);

const editPosts = () => {
  const { title, contents, thumbnailImage, submitPost } = useSubmitPost();

  return (
    <div>
      <PostTitleEditor title={title} thumbnailImage={thumbnailImage} />
      <DynamicEditor contents={contents} />
      <SubmitPost submitPost={submitPost} />
    </div>
  );
};

export default editPosts;
