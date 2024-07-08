import React from "react";
import { Layouts } from "../../components/Layouts";
import { Hero } from "../../components/Hero";
import { Card } from "../../components/Card";
import { Container, Title } from "../../components/StyledComponents";

export const Home = () => {
  
  return (
    <Layouts>
      <Hero />
      <Container>
        <Title>Products</Title>
      </Container>
      <Card />
    </Layouts>
  );
};
