import React from "react";

import styled from "./lib/container.module.css";

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
