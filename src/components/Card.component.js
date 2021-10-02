import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Container>
      <InfoDiv>
        <p>{props.caption}</p>
      </InfoDiv>

      <ImageDiv>
        <img src={props.image} alt="Electronics" />
      </ImageDiv>
      <LastDiv>
        <p>See more</p>
      </LastDiv>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  width: 340px;
  max-width: 340px;
  min-width: 340px;
  height: 410px;
  min-height: 410px;
  max-height: 410px;
  margin-left: 18px;
  margin-right: 8px;
  z-index: 88;
  @media (max-width: 768px) {
    min-width: 320px;
    margin-top: 20px;
  }
`;

const InfoDiv = styled.div`
  height: 20%;

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
const LastDiv = styled.div`
  height: 8%;
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
const ImageDiv = styled.div`
  height: 60%;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  img {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    width: 90%;
    ${"" /* padding-right: 8px; */}
    ${"" /* padding-left: 8px; */}
    img {
      width: 100%;
      padding: 0px;
    }
  }
`;

export default Card;
