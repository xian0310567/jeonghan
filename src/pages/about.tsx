import React from "react";

import Container from "@/components/atoms/Container";
import AboutCard from "@/components/feature/about/AboutCard/AboutCard";
import Description from "@/components/feature/about/Description/Description";

const about = () => {
  return (
    <Container>
      <AboutCard />
      <Description />
    </Container>
  );
};

export default about;
