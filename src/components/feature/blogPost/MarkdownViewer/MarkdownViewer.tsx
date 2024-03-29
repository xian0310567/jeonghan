import React from "react";
import Prism from "prismjs";

import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import { MarkdownViewerProps } from "./lib/MarkdownViewer";

import { Container, Title } from "./lib/styled";

import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const MarkdownViewer = (props: MarkdownViewerProps) => {
  return (
    <Container>
      <Title>{props.post.title}</Title>
      <Viewer
        initialValue={props.post.contents}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </Container>
  );
};

export default MarkdownViewer;
