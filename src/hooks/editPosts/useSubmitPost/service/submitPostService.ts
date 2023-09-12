import axios from "axios";
import { useRouter } from "next/router";
import { message } from "antd";
import { useS3Upload } from "next-s3-upload";

import { SubmitPostStateCallback } from "../lib/useSubmitPostState";

const useSubmitPostService = (state: SubmitPostStateCallback) => {
  const router = useRouter();
  const { uploadToS3 } = useS3Upload();

  const usePublishPost = async () => {
    const { url } = await uploadToS3(state.thumbnailImage.get() as File);

    axios
      .post("/api/posts", {
        title: state.title.get(),
        contents: state.contents.get(),
        thumbnailImage: url,
      })
      .then(() => {
        message.success("발행되었습니다");
        router.push("/");
      });
  };

  return { usePublishPost };
};

export default useSubmitPostService;
