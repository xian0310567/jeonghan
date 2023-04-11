import Head from "next/head";

import Header from "@/components/atoms/Header";
import CardView, { CardViewProps } from "@/components/feature/home/CardView";

export default function Home({ items }: CardViewProps) {
  return (
    <>
      <Header description="내가 정한것을 좋아하는 정한 👋">jeonghan_log</Header>
      <CardView items={items} />
    </>
  );
}

export const getStaticProps = async () => {
  const items = [
    {
      title: "타이틀",
      body: "바디",
      date: "2023-04-12",
      commentCount: 0,
      heartCount: 0,
    },
  ];

  return {
    props: {
      items,
    },
  };
};
