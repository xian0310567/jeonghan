import React from "react";

import HamburgerMenu from "@/components/layout/HamburgerMenu";
import HeaderMenu from "@/components/layout/HeaderMenu";

import useMenuList from "@/hooks/statics/useMenuList";

import styled from "./lib/header.module.css";

const Header = () => {
  return (
    <div className={styled.container}>
      <div className={styled.sizedContainer}>
        <HamburgerMenu />
        <HeaderMenu items={useMenuList()} />
      </div>
    </div>
  );
};

export default Header;
