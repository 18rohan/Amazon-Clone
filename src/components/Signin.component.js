import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Import icons
import { FcGoogle } from "react-icons/fc";

// Import actions
import { signInAPI, Register, Login } from "../store/actions/UserActions.js";
const Signin = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    email: email,
    password: password,
  };

  return (
    <>
      <Container>
        <SigninLogo>
          <p>Sign In</p>
        </SigninLogo>

        <EmailContainer>
          <p>Email Id</p>
          <input
            placeholder="Enter your email"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </EmailContainer>
        <EmailContainer>
          <p>Password</p>
          <input
            placeholder="Enter your Password"
            id="Password"
            name="password"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </EmailContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              console.log("ADD USER!!: ", user);
              dispatch(Login(user));
            }}
          >
            <p>Continue</p>
          </Button>

          <div>
            <p>
              By continuing, you agree to Amazon's <span>Condition of Use</span>{" "}
              and <span>Privacy Notice</span>
            </p>
          </div>
        </ButtonContainer>

        <LastRow>
          <div>
            <span>►</span>
            <p>Need help?</p>
          </div>
        </LastRow>
        <ButtonContainerDown>
          <SignupLogo>
            <p>New to Amazon? Sign up</p>
          </SignupLogo>
          <ButtonGrey
            onClick={() => {
              console.log("ADD USER!!: ", user);
              dispatch(Register(user));
            }}
          >
            <p>Create your Amazon Account</p>
          </ButtonGrey>
          <ButtonGrey
            style={{ backgroundColor: "white", marginTop: "2px" }}
            onClick={() => dispatch(signInAPI())}
          >
            <FcGoogle size={24} />
            <p>Google Login</p>
          </ButtonGrey>
        </ButtonContainerDown>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;

  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 348px;
  height: 405px;
  padding-top: 2px;
  padding-bottom: 20px;
  padding-left: 26px;
  padding-right: 26px;
  border: 1px solid #d3d3d3;
  ${"" /* box-shadow: 4px 4px 4px grey; */}
  p {
    font-size: 25px;
    font-weight: 500;
  }
`;

const SigninLogo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;
const FieldsContainer = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  background-color: #f0c14b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px 8px 0px;
  text-align: center;
  border-radius: 4px;
  margin-top: 10px;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 2px #f0c14b;
    border: 1px solid #f0c14b;
  }
  p {
    font-size: 13px;
    font-weight: 500;
  }
`;

const ButtonGrey = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  margin-top: 15px;
  border: 2px solid #eeeeee;
  cursor: pointer;
  margin-bottom: 3px;
  p {
    font-size: 13px;
  }
  &:hover {
    outline: none;
    box-shadow: 0px 0px 2px #f0c14b;
    border: 2px solid #f0c14b;
  }
`;

const EmailContainer = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 12px;
  p {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
  }
  input {
    padding-top: 4px;
    margin-top: 4px;
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px solid grey;
    padding-left: 5px;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px #f0c14b;
      border: 1px solid #f0c14b;
    }
  }
`;
const LastRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  span {
    color: grey;
    font-size: 13px;
  }
  p {
    color: #0066c0;
    font-size: 13px;
    text-align: left;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  ${"" /* border: 1px solid #a9a9a9; */}
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 12px;
  div {
    padding-top: 12px;
  }
  div > p {
    font-size: 13px;
  }
  span {
    color: #0066c0;
  }
`;
const GoogleLoginButton = styled.button`
  width: 90%;
  background-color: #ffffff;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  margin-top: 8px;
  border: 2px solid #eeeeee;
  cursor: pointer;
  margin-bottom: 3px;
  p {
    font-size: 13px;
  }
  &:hover {
    outline: none;
    box-shadow: 0px 0px 2px #f0c14b;
    border: 2px solid #f0c14b;
  }
`;
const SignupLogo = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -23px;
  padding:0px 8px; 0px 8px;
  p {
    font-size: 13px;
    color: #36454f;
  }
`;
const ButtonContainerDown = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-top: 1px solid #d3d3d3;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 2px;
  margin-top: 8px;
  div {
    padding-top: 12px;
  }
  div > p {
    font-size: 13px;
  }
  span {
    color: #0066c0;
  }
`;
export default Signin;
