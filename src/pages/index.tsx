import Head from "next/head";

import Container from "@/components/atoms/Container";
import Header from "@/components/feature/home/Header";
import CardView from "@/components/feature/home/CardView";

import usePosts, { PostsCallback } from "@/hooks/blog/usePosts";

export default function Home(props: { posts: PostsCallback[] }) {
  return (
    <Container>
      <Header description="내가 정한것을 좋아하는 정한 👋">jeonghan_log</Header>
      <CardView posts={props.posts} />
    </Container>
  );
}

export const getServerSideProps = async () => {
  const posts = await usePosts();

  const bestPosts = posts.filter((post, index) => index < 4);

  return {
    props: {
      posts: bestPosts,
    },
  };
};
