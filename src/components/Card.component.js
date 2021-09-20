import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Container>
      <Info_div>
        <p>{props.caption}</p>
      </Info_div>

      <Image_div>
        <img src={props.image} alt="Electronics image" />
      </Image_div>
      <Last_div>
        <p>See more</p>
      </Last_div>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  width: 340px;
  height: 400px;
  margin-left: 18px;
  margin-right: 8px;
  z-index: 88;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Info_div = styled.div`
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
const Last_div = styled.div`
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
const Image_div = styled.div`
  height: 60%;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  img {
    width: 100%;
  }
`;

export default Card;
