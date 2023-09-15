import React from "react";
import dynamic from "next/dynamic";

import PostTitleEditor from "@/components/feature/editPosts/PostTitleEditor";
import EditTags from "@/components/feature/editPosts/EditTags";
import SubmitPost from "@/components/feature/editPosts/SubmitPost";

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
      <EditTags />
      <DynamicEditor contents={contents} />
      <SubmitPost usePublishPost={usePublishPost} />
    </div>
  );
};

export default EditPosts;
