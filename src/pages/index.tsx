import Head from "next/head";
import { PrismaClient } from "@prisma/client";

import Container from "@/components/atoms/Container";
import Header from "@/components/feature/home/Header";
import CardView, { CardViewProps } from "@/components/feature/home/CardView";

export default function Home({ items }: CardViewProps) {
  return (
    <Container>
      <Header description="내가 정한것을 좋아하는 정한 👋">jeonghan_log</Header>
      <CardView items={items} />
    </Container>
  );
}

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const posts = await prisma.posts.findMany({
    orderBy: { heartCount: "desc" },
  });

  const bestPosts = posts.filter((post, index) => index < 4);

  return {
    props: {
      items: JSON.parse(JSON.stringify(bestPosts)),
    },
  };
};
