import React from "react";
import { useRouter } from "next/router";

import HamburgerMenu from "@/components/layout/HamburgerMenu";

import styled from "./lib/header.module.css";

const Header = () => {
  const router = useRouter();
  const routePath = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styled.container}>
      <div className={styled.sizedContainer}>
        <HamburgerMenu />
        <ul className={styled.menu}>
          <li
            onClick={() => {
              routePath("/");
            }}
          >
            <span>Home</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li
            onClick={() => {
              routePath("/about");
            }}
          >
            <span>About</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
