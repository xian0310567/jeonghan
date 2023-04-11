import React from "react";

import styled from "./lib/description.module.css";

const Description = () => {
  return (
    <div className={styled.container}>
      <span className={styled.text}>
        저는 1년차 프론트엔드 개발자 이정한입니다. <br />
        쉽고, 재밌고, 남다르게 표현하는 걸 좋아합니다.
        <br />
        <br />
        {/* 탄탄한 코드 위에 감각적인 UI를 그려냅니다. <br />
        CSS와 JavaScript를 활용한 동적 모션을 좋아하고, <br />
        컴포넌트 단위의 유지보수에 최적화된 마크업에 관심이 많습니다.
        <br />
        <br /> */}
        사용자 입장에서 생각하는 걸 좋아해서 계속 고민하며 더 나은 방향에 대해
        사람들과 얘기 나누곤 합니다. <br />
        프로덕트가 사용자들의 기억에 남도록 하는 게 저의 일입니다.
        <br />
        <br />
        저는 제 일을 좋아합니다. 좋아하니까 즐기게 되고, 더 잘하고 싶어집니다.
        <br />
        그러다보면 거기에 저만의 특별한 무언가가 담기게 되더라고요.
        <br />
        목표를 향해 성큼성큼 나아가는 의지, 끊임없이 솟아오르는 영감, 그리고
        생기발랄함까지.
        <br />
        모두 제가 가진 저만의 ‘다움’입니다 :)
        <br />
        <br />
        좋아하는 일을 즐기면서 잘하는 것, 제가 꿈꾸는 저의 모습입니다.
      </span>
    </div>
  );
};

export default Description;
