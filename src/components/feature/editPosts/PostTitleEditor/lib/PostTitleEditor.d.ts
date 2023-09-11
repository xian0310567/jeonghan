import { SubmitPostStateCallback } from "@/hooks/editPosts/useSubmitPost";

export type PostTitleEditorProps = Pick<
  SubmitPostStateCallback,
  "title" | "thumbnailImage"
>;
