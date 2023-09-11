import axios from "axios";
import { useS3Upload } from "next-s3-upload";

import { SubmitPostStateCallback } from "../lib/useSubmitPostState";

const submitPostService = (state: SubmitPostStateCallback) => {
  const { uploadToS3 } = useS3Upload();

  const submitPost = async () => {
    const { url } = await uploadToS3(state.thumbnailImage.get() as File);

    axios.post("/api/posts", {
      title: state.title.get(),
      contents: state.contents.get(),
      thumbnailImage: url,
    });
  };

  return { submitPost };
};

export default submitPostService;
