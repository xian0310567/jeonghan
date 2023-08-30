import React from "react";
import dynamic from "next/dynamic";

import SubmitPost from "@/components/feature/editPosts/SubmitPost";

const DynamicEditor = dynamic(
  () => import("@/components/feature/editPosts/MarkdownEditor"),
  { ssr: false }
);

const editPosts = () => {
  return (
    <div>
      <DynamicEditor />
      <SubmitPost />
    </div>
  );
};

export default editPosts;
