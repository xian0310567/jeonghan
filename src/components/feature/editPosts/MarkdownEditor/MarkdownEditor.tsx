import React from "react";
import { useS3Upload } from "next-s3-upload";

import { Editor } from "@toast-ui/react-editor";
import { MarkdownEditorProps } from "./lib/MarkdownEditor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

const MarkdownEditor = (props: MarkdownEditorProps) => {
  const { uploadToS3 } = useS3Upload();
  const editorRef = React.useRef<any>(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  const handleChange = () => {
    props.contents.set(editorRef.current?.getInstance().getHTML());
  };

  type HookCallback = (url: string, text?: string) => void;

  const onUploadImage = async (file: File | Blob, callback: HookCallback) => {
    const { url } = await uploadToS3(file as File);

    callback(url, "image");
  };

  return (
    <Editor
      ref={editorRef}
      initialValue=""
      placeholder="글을 작성해주세요!"
      initialEditType="markdown"
      previewStyle="vertical"
      height="60rem"
      onChange={handleChange}
      toolbarItems={toolbarItems}
      plugins={[colorSyntax]}
      hooks={{ addImageBlobHook: onUploadImage }}
    />
  );
};

export default MarkdownEditor;
