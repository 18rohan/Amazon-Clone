import React from "react";
import styled from "styled-components";

// Import packages
import Signin from "./Signin.component";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

const SigninPage = (props) => {
  const currentUser = useSelector((state) => state.user.CurrentUser);

  return (
    <Container>
      {currentUser && <Redirect to="/" />}
      <Link to="/">
        <Logo>
          <img src="images/amazon_logo.png" alt="amazon logo" />
        </Logo>
      </Link>
      <Signin />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
`;

const Logo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  img {
    width: 160px;
  }
`;
export default SigninPage;
