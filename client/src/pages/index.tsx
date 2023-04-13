import Head from "next/head";

import Header from "@/components/atoms/Header";
import { CardProps } from "@/components/feature/home/Card";
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
  const items: CardProps[] = [
    {
      id: 1,
      title: "(번역) 프런트엔드 개발의 종말",
      body: "지난 몇 달간, 저는 AI에 대해 점점 더 불안해하는 많은 주니어 개발자들과 얘기를 나눴습니다. 그들은 GPT-4와 같은 도구들의 갈수록 발전해가는 인상적인 데모를 보고, AI가 HTML/CSS/JS에 능숙해질 무렵에는 자신들이 할 일이 남아있지 않을 것이라고 걱정했습니다.",
      date: "2023-04-12",
      thumbnailImage: "",
      commentCount: 0,
      heartCount: 0,
    },
    {
      id: 2,
      title:
        "개발자의 능동적인 글쓰기를 통한 성장과 학습효과 : 왜 글쓰기를 꾸준히 진행해왔는가?",
      body: "바디",
      date: "2023-04-12",
      thumbnailImage: "",
      commentCount: 0,
      heartCount: 0,
    },
    {
      id: 3,
      title: "[번역] 2023년 버전 리액트 프로젝트를 시작하는 방법",
      body: "바디",
      date: "2023-04-12",
      thumbnailImage: "",
      commentCount: 0,
      heartCount: 0,
    },
    {
      id: 4,
      title: "양방향 바인딩, 단방향 바인딩",
      body: "바디",
      date: "2023-04-12",
      thumbnailImage: "",
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
