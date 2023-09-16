import React from "react";

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const MarkdownViewer = () => {
  return (
    <Viewer
      initialValue={
        "## 안녕하세요이번엔 진짜로 마크다운으로 작성될것같아요그렇다면 좋겠네요 제발```javascript    const a =;```"
      }
    />
  );
};

export default MarkdownViewer;
