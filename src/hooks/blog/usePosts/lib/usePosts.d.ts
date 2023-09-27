import { Posts } from "@prisma/client";

export type PostsResponse = Posts & {
  tag: { tag: string }[];
};

export type PostsCallback = Posts & {
  tag: string[];
};
