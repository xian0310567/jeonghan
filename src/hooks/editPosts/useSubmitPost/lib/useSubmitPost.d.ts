import { SubmitPostStateCallback } from "./useSubmitPostState";

export interface SubmitPostCallback extends SubmitPostStateCallback {
  submitPost: () => void;
}
