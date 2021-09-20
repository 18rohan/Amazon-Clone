import React from "react";
import styled from "styled-components";

// Import Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import {GiHamburgerMenu} from 'react-icons/gi';
const Header = () => {
  return (
    <ParentContainer>
    <Container>
      <Left>
        <Logo>
          <img src="images/amazon-dark.png" alt="Amazon Logo" />
          </Logo>
          <SelectAddress>
            <HiOutlineLocationMarker color="white" size={24} />
            <p>
              <span style={{ color: "grey" }}>Hello </span>
              <span>Select your address</span>
            </p>
          </SelectAddress>


      </Left>
      <SearchBar>
        <CategoryButton>All ▾</CategoryButton>
        <InputField />
        <SearchButton>
          <BsSearch size={18} />
        </SearchButton>
      </SearchBar>
      <Right>
        <Icon>
          <img src="images/india-flag.png" alt="flag" /> <p>▾</p>
        </Icon>
        <SigninContainer>
          <p>
            <span>Hello Signin </span>
            Accounts & Lists ▾
          </p>
        </SigninContainer>
        <Returns>
          <p>
            <span>Returns </span>& Orders
          </p>
        </Returns>
        <Cart>
          <BiCart size={35} color="white" />
          <p>cart</p>
        </Cart>
      </Right>
    </Container>
    <Menu>
      <MenuItem>
        <GiHamburgerMenu color="white" size={16} />
        <p>All</p>
      </MenuItem>
      <MenuItem>
        <p>Mobiles</p>
      </MenuItem>
      <MenuItem>
        <p>Best Seller</p>
      </MenuItem>
      <MenuItem>
        <p>Fashion</p>
      </MenuItem>
      <MenuItem>
        <p>Electronics</p>
      </MenuItem>
      <MenuItem>
        <p>Customer Service</p>
      </MenuItem>
      <MenuItem>
        <p>Amazon Pay</p>
      </MenuItem>
      <MenuItem>
        <p>Prime ▾</p>
      </MenuItem>
      <MenuItem>
        <p>Today's Deal</p>
      </MenuItem>
      <MenuItem>
        <p>New Releases</p>
      </MenuItem>
      <MenuItem>
        <p>Computers</p>
      </MenuItem>
      <MenuItem>
        <p>Home & Kitchen</p>
      </MenuItem>
      <MenuItem>
        <p>Books</p>
      </MenuItem>
      <MenuItem>
        <p>Toys and Games</p>
      </MenuItem>
      <MenuItem>
        <p>Coupon</p>
      </MenuItem>
      <MenuItem>
        <p>Sell</p>
      </MenuItem>
    </Menu>
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  display:flex;
  flex-direction:  column;

`
const Container = styled.div`
  background-color: #131921;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Menu = styled.div`
  background-color: #232f3e;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top:10px;
  padding-bottom: 10px;

`
const MenuItem = styled.div`
  display:flex;
  flex-direction: row;
  margin-top:4px;
  margin-bottom:4px;
  padding:3px;
  padding-top:3px;
  padding-bottom: 3px;
  margin-top:4px;
  margin-bottom:4px;
  margin-left:4px;
  margin-right: 4px;
  border:1px solid transparent;
  p {
    color:white;
    font-size:14px;
    padding-left:5px;
  }
  &:hover {
    border:1px solid white;
  }
`
const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top:8px;
  padding-right: 2px;
  margin-left: 8px;
  width: 40%;
`;
const Right = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    padding: 2px;
  }
  p {
    color: grey;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 55%;
  flex-wrap: wrap;
  margin-left:6px;
  padding-top: 8px;
  padding-bottom: 4px;
  margin-top: 8px;
  img {
    width: 100px;
  }
`;

const SelectAddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  padding-left: 28px;
  padding-right: 25px;
  padding-bottom:4px;
  p {
    color: white;
    font-size: 14px;
    padding-left: 7x;
    font-weight: 400;
  }
  p span {
    display: block;
  }
`;
const SigninContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 41%;
  padding-left: 5px;
  p {
    color: white;
    font-size: 14px;
    padding-left: 7x;
    font-weight: bold;
  }
  p > span {
    color: white;
    font-weight: 400;
    font-size: 14px;
    padding-right: 55px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 40px;
  background-color: white;
  border-radius: 3px;
`;

const CategoryButton = styled.button`
  background-color: #f9f9f9;
  height: 100%;
  width: 50px;
  border: 1px solid #f9f9f9;
  border-radius: 3px;
  border-right: 1px solid #eeeeee;
  color: grey;
  font-size: 12px;
`;

const InputField = styled.input`
  height: 90%;
  width: 100%;
  border: 1px solid #eeeeee;
`;

const SearchButton = styled.button`
  background-color: #febd69;
  height: 100%;
  width: 50px;
  border: 1px solid #febd69;
  border-radius: 3px;
  border-right: 1px solid #febd69;

  font-size: 12px;
`;

const Returns = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;

  p {
    color: white;
    font-size: 15px;
    font-weight: bold;
  }
  p > span {
    font-size: 13px;
    font-weight: 400;
  }
`;

const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-right: 8px;
  p {
    color: white;
    padding-top: 10px;
  }
`;

export default Header;
