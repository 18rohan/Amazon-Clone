import React from "react";
import styled from "styled-components";

// Importing components
import MainFeed from "./main.component";
const Home = (props) => {
  return (
    <Container>
      <MainFeed />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #eeeeee;

  height: 100vh;
  @media (min-width: 1600px) {
    width: 100%;
    margin-left: 225px;
    border: 0px;
    max-width: 1500px;

    background-color: white;
  }
`;
export default Home;
