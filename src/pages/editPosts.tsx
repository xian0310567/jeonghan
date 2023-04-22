import React from "react";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(
  () => import("@/components/feature/editPosts/MarkdownEditor"),
  { ssr: false }
);

const editPosts = () => {
  return (
    <div>
      <DynamicEditor />
    </div>
  );
};

export default editPosts;
