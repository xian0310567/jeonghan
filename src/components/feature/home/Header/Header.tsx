import React from "react";

import { HeaderProps } from "./lib/header.interface";

import styled from "./lib/header.module.css";

const Header = ({ children, description }: HeaderProps) => {
  return (
    <div className={styled.header}>
      <h1 className={styled.title}>{children}</h1>
      <span className={styled.description}>{description}</span>
    </div>
  );
};

export default Header;
