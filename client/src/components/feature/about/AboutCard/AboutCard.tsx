import React from "react";
import Image from "next/image";

import githubIcon from "@/assets/github.svg";

import styled from "./lib/aboutCard.module.css";

const AboutCard = () => {
  return (
    <div className={styled.container}>
      <div className={styled.image} />
      <div className={styled.description}>
        <h2>이정한</h2>
        <span>Stay Hungry, Stay Foolish!</span>
        <br />
        <br />
        <span>
          생각을 정리하고 글로 쓰는것을 좋아하는 프론트엔드 개발자입니다. <br />
          언제나 성장하기 위해 노력하며 유의미한 데이터로 사용자 경험을
          향상시키는데에 관심이 많습니다
        </span>
        <div className={styled.contact}>
          <Image
            src={githubIcon}
            width={20}
            height={20}
            alt="github 바로가기"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
