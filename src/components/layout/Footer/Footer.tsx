import React from "react";

import styled from "./lib/footer.module.css";

const Footer = () => {
  return (
    <div className={styled.grid}>
      <div className={styled.item}></div>
      <div>
        <span className={styled.design}>Designed by Jeonghan</span>
      </div>
      <div className={styled.item}></div>
    </div>
  );
};

export default Footer;
