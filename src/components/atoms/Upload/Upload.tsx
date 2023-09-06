import React from "react";

import { Label, Input } from "./lib/styled";

import { UploadProps } from "./lib/Upload";

const Upload = (props: UploadProps) => {
  return (
    <>
      <Label htmlFor="file-upload">{props.children}</Label>
      <Input type="file" id="file-upload" onChange={props.onChange} />
    </>
  );
};

export default Upload;
