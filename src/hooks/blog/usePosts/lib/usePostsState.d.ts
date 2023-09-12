import { Posts } from "@prisma/client";

export interface PostsStateCallback {
  posts: {
    get: () => Posts[] | undefined;
    set: React.Dispatch<SetStateAction<Posts[]>>;
  };
}
