import React from "react";

import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

const MarkdownEditor = () => {
  const editorRef = React.useRef(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  //   const onUploadImage = async (blob, callback) => {
  //     // blob은 base64 인코딩된 이미지 파일
  //     // formData에 담아 서버로 보내고, 서버에서는 s3에 이미지 저장후 s3에서 url을 받아 다시 프론트로 값 전송
  //     const formData = new FormData()
  //     formData.append('image', blob)
  //     try {
  //         const imageRes = await apiInstance.post('/image', formData, {
  //             headers: {
  //                 'Content-Type': 'multipart/form-data',
  //             },
  //         })
  //         const image_URL = imageRes.data.imageURL
  //         setImage(image_URL)
  //         // 글 화면에 이미지 띄우기
  //         callback(image_URL, 'image')
  //     } catch (e) {
  //         console.error(e.response)
  //     }
  // }

  return (
    <Editor
      ref={editorRef}
      initialValue=""
      placeholder="글을 작성해주세요!"
      initialEditType="markdown"
      previewStyle="tab"
      height="60rem"
      theme={"dark"}
      toolbarItems={toolbarItems}
      plugins={[colorSyntax]}
      //   hooks={{ addImageBlobHook: onUploadImage }}
    />
  );
};

export default MarkdownEditor;
