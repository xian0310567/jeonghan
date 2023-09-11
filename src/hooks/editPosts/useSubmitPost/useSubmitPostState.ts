import { useState } from "react";

import { SubmitPostStateCallback } from "./lib/useSubmitPostState";

const useSubmitPostState = (): SubmitPostStateCallback => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [thumbnailImage, setThumbnailImage] = useState<string>("");

  return {
    title: {
      get: () => title,
      set: setTitle,
    },
    contents: {
      get: () => contents,
      set: setContents,
    },
    thumbnailImage: {
      get: () => thumbnailImage,
      set: setThumbnailImage,
    },
  };
};

export default useSubmitPostState;
