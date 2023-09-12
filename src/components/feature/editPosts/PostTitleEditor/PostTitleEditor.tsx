import React from "react";

import Upload from "@/components/atoms/Upload";
import TextInput from "@/components/atoms/InputText";

import { PostTitleEditorProps } from "./lib/PostTitleEditor";

import { Container } from "./lib/styled";

const PostTitleEditor = (props: PostTitleEditorProps) => {
  return (
    <Container>
      <TextInput
        placeholder="제목을 입력해주세요."
        onChange={(e) => props.title.set(e.target.value)}
      >
        {props.title.get()}
      </TextInput>
      <Upload
        onChange={(e) => {
          if (e.target.files?.item)
            props.thumbnailImage.set(e.target.files?.item(0));
        }}
      >
        upload
      </Upload>
    </Container>
  );
};

export default PostTitleEditor;
