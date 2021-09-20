import React from "react";
import styled from "styled-components";

const SigninCard = (props) => {
  return (
    <Container>
      <Info_div>
        <p>Sign in for your best experience</p>
      </Info_div>

      <Last_div>
        <Button>Sign in securely</Button>
      </Last_div>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  width: 340px;
  height: 160px;
  margin-left: 18px;
  margin-right: 8px;
  z-index: 88;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Info_div = styled.div`
  height: 40%;

  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;

  p {
    font-weight: bold;
    color: #0f1111;
    font-size: 22px;
  }
`;
const Last_div = styled.div`
  height: 10%;
  width: 100%;
  background-color: transparent;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    color: #007185;
    font-size: 13px;
    line-height: 19px;
    text-align: start;
    letter-spacing: normal;
  }
`;

const Button = styled.div`
  width: 80%;
  background-color: #ffd814;
  padding: 8px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
`;
const Image_div = styled.div`
  height: 60%;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  img {
    width: 100%;
  }
`;

export default SigninCard;
