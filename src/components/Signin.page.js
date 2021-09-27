import React, { useEffect } from "react";
import styled from "styled-components";

// Import packages
import Signin from "./Signin.component";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const SigninPage = (props) => {
  const currentUser = useSelector((state) => state.user.CurrentUser);

  return (
    <Container>
      {currentUser && <Redirect to="/" />}
      <Link to="/">
        <Logo>
          <img src="images/amazoncom.png" alt="amazon logo" />
        </Logo>
      </Link>
      <Signin />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
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
  margin-bottom: -20px;
  img {
    width: 160px;
  }
`;
export default SigninPage;
