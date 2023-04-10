import React from "react";

import HamburgerMenu from "@/components/layout/HamburgerMenu";

import styled from "./lib/header.module.css";

const Header = () => {
  return (
    <div className={styled.container}>
      <div className={styled.sizedContainer}>
        <HamburgerMenu />
        <ul className={styled.menu}>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li>
            <span>About</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
