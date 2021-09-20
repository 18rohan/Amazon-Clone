import React from "react";
import styled from "styled-components";

// Importing components
import MainFeed from "./main.component";
const Home = (props) => {
  return (
    <Container>
      <MainFeed/>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height:100vh;
`;
export default Home;
