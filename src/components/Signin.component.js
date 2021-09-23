import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Import icons
import { FcGoogle } from "react-icons/fc";

// Import actions
import { signInAPI } from "../store/actions/UserActions.js";
const Signin = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <p>Sign-In</p>

        <EmailContainer>
          <p>Email or mobile phone number</p>
          <input placeholder="Enter your email" id="email" type="text" />
        </EmailContainer>
        <ButtonContainer>
          <Button>
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
      </Container>
      <ButtonGrey>
        <p>Create your Amazon Account</p>
      </ButtonGrey>
      <GoogleLoginButton onClick={() => dispatch(signInAPI())}>
        <div>
          <FcGoogle size={24} />
        </div>
        <div>
          <p>Google Login</p>
        </div>
      </GoogleLoginButton>
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
  height: 279px;
  padding-top: 2px;
  padding-bottom: 20px;
  padding-left: 26px;
  padding-right: 26px;
  border: 1px solid #eeeeee;
  p {
    font-size: 25px;
    font-weight: 500;
  }
`;

const FieldsContainer = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Button = styled.div`
  width: 100%;
  background-color: #f0c14b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  margin-top: 10px;
  border: 1px solid grey;
  p {
    padding-bottom: 8px;
  }
`;

const ButtonGrey = styled.div`
  width: 28%;
  background-color: white;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  margin-top: 15px;
  border: 1px solid grey;
  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.9);
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 30%;
  padding: 8px;
  margin-top: 14px;
  border: 1px solid #eeeeee;
  box-shadow: 5px 5px 10px grey;
`;
export default Signin;
