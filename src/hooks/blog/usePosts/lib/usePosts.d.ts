import { Posts } from "@prisma/client";

export interface PostsResponse extends Posts {
  tag: { tag: string }[];
}

export interface PostsCallback extends Posts {
  tag: string[];
}
