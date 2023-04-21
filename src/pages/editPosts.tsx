import React from "react";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(
  () => import("@/components/atoms/MarkdownEditor"),
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
