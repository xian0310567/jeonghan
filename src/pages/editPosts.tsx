import React from "react";
import dynamic from "next/dynamic";

import SubmitPost from "@/components/feature/editPosts/SubmitPost";
import PostTitleEditor from "@/components/feature/editPosts/PostTitleEditor";

import useSubmitPost from "@/hooks/editPosts/useSubmitPost";

const DynamicEditor = dynamic(
  () => import("@/components/feature/editPosts/MarkdownEditor"),
  { ssr: false }
);

const EditPosts = () => {
  const { title, contents, thumbnailImage, usePublishPost } = useSubmitPost();

  return (
    <div>
      <PostTitleEditor title={title} thumbnailImage={thumbnailImage} />
      <DynamicEditor contents={contents} />
      <SubmitPost usePublishPost={usePublishPost} />
    </div>
  );
};

export default EditPosts;
