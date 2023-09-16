import React from "react";
import dynamic from "next/dynamic";

import Container from "@/components/atoms/Container";

const MarkdownViewer = dynamic(
  () => import("@/components/feature/blogPost/MarkdownViewer"),
  { ssr: false }
);

const post = () => {
  return (
    <Container>
      <MarkdownViewer />
    </Container>
  );
};

export default post;
