import React from "react";

import { Container as SContainer } from "./lib/styled";

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
