import React, { useEffect, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";

// Import Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

// Import packages
import { Link } from "react-router-dom";
import { db, auth, storage, provider } from "../firebase/firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { signoutAPI } from "../store/actions/UserActions.js";
import { AddToCart } from "../store/actions/CartActions.js";
import { PRODUCTS } from "../Data/data.js";
import {
  AddItem,
  SetCart,
  AddToWishListAPI,
} from "../store/actions/CartActions.js";

// Import Fading animations
import FadeIn from "../utils/Fadein.js";
const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.CurrentUser);

  if (currentUser) {
    if (currentUser.displayName) {
      var user = currentUser.displayName.split(" ")[0];
    } else if (currentUser.email) {
      user = currentUser.email.split("@")[0];
    }
  } else {
    user = "Sign in";
  }
  const AllCartItems = useSelector((state) => state.cart.cartItems);
  var CartNumber = 0;
  AllCartItems.map((item) => {
    CartNumber += item.quantity;
  });
  console.log("ALL CART ITEMS: ", AllCartItems);
  // const BasketNumber = AllCartItems.length;
  const BasketNumber = CartNumber;

  const FetchUser = async () => {
    if (!currentUser) {
      return;
    } else {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      const FetchedData = docSnap.data();
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        dispatch(
          SetCart({ product: FetchedData.cart, user_id: currentUser.uid })
        );
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  };

  useLayoutEffect(() => {
    FetchUser();
  }, []);
  return (
    <ParentContainer>
      <Container>
        <Left>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <img src="images/amazon-dark.png" alt="Amazon Logo" />
            </Logo>
          </Link>
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
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <p>
                <span>Hello, {user}</span>
                <div>Accounts & Lists ▾</div>
              </p>
            </Link>
            <Dropdown>
              <HoverComponent>
                {currentUser ? (
                  <LogoutButton
                    onClick={() => {
                      dispatch(signoutAPI());
                    }}
                  >
                    Sign Out
                  </LogoutButton>
                ) : (
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <SigninButton>
                      <p
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "400",
                        }}
                      >
                        Sign In
                      </p>
                    </SigninButton>
                  </Link>
                )}

                <RowContainer>
                  <Options>
                    <p>Your List</p>
                    <Item>
                      <p>Create a Wishlist</p>
                    </Item>
                    <Item>
                      <p>Wish from any website</p>
                    </Item>
                    <Item>
                      <p>Baby Wish List</p>
                    </Item>
                    <Item>
                      <p>Discover your style</p>
                    </Item>
                    <Item>
                      <p>Explore Showroom</p>
                    </Item>
                  </Options>
                  <Options
                    style={{
                      borderLeft: "1px solid grey",
                      paddingLeft: "15px;",
                    }}
                  >
                    <p>Account</p>
                    <Item>
                      <p>Your Account</p>
                    </Item>
                    <Item>
                      <p>Your Orders</p>
                    </Item>
                    <Item>
                      <Link to="/wishlist" style={{ textDecoration: "none" }}>
                        <p>Your Wishlist</p>
                      </Link>
                    </Item>
                    <Item>
                      <p>Your Reccomendations</p>
                    </Item>
                    <Item>
                      <p>Your Saved Items</p>
                    </Item>
                  </Options>
                </RowContainer>
              </HoverComponent>
            </Dropdown>
          </SigninContainer>

          <Returns>
            <p>
              <span>Returns </span>& Orders
            </p>
          </Returns>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Cart>
              <CartCount>
                <p>{BasketNumber}</p>
              </CartCount>
              <BiCart size={35} color="white" />
            </Cart>
          </Link>
        </Right>
      </Container>
      <Menu>
        <MenuItem>
          <GiHamburgerMenu color="white" size={16} />
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>All</p>
          </Link>
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
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 400;
  @media (max-width: 768px) {
    width: 102vw;
    display: flex;
  }
`;
const Container = styled.div`
  background-color: #131921;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Menu = styled.div`
  background-color: #232f3e;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: red;
    width: 99%;
  }
`;

const LogoutButton = styled.button`
  width: 70%;
  background-color: #f0c14b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  padding: 8px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid grey;
  p {
    padding-bottom: 4px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 400;
  }
`;

const SigninButton = styled.a`
  width: 200px;
  background-color: #f0c14b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid grey;
  text-decoration: none;
  p {
    padding-bottom: 4px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 400;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 4px;
  margin-bottom: 6px;
  margin-left: 6px;
  margin-right: 4px;
  padding-left: 2px;
  padding-right: 2px;
  border: 1px solid transparent;
  p {
    color: white;
    font-size: 14px;
    padding: 4px;
  }
  &:hover {
    border: 1px solid white;
  }
  @media (max-width: 768px) {
    width: 120px;
    padding: 0;
    margin: 0;
    p {
      font-size: 12px;
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 8px;
  padding-right: 2px;
  margin-left: 8px;
  width: 50%;
  @media (max-width: 768px) {
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 4px;
    margin-right: 0px;
    align-items: center;
  }
`;
const Right = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 15%;
    margin: 0px;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 55%;
  flex-wrap: wrap;
  margin-left: 6px;
  padding-top: 8px;
  padding-bottom: 4px;
  margin-top: 8px;
  img {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 30%;
    display: flex;
    margin: 0px;
    padding-right: 0px;
    padding-left: 2px;
    flex-direction: row;
    justify-content: flex-start;
    img {
      width: 80px;
    }
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
  padding-bottom: 4px;
  p {
    color: white;
    font-size: 14px;
    padding-left: 7x;
    font-weight: 400;
  }
  p span {
    display: block;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const HoverComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-left: 8px;
  padding-right: 8px;
  z-index: 999;
  width: 370px;
  height: 320px;
  position: absolute;
  top: 50px;
  right: 80px;
`;

const Dropdown = styled.div`
  display: none;
  transition-delay: 3s;
`;
const SigninContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 58%;
  padding-left: 5px;
  span {
    display: inline-block;
  }
  p {
    color: white;
    font-size: 14px;
    padding-left: 7x;
    font-weight: bold;
    text-decoration: none;
  }
  p > span {
    color: white;
    font-weight: 400;
    font-size: 12px;
    padding-right: 62px;
  }

  &:hover ${Dropdown} {
    display: block;
    transition-delay: 3s;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 3px;
  input {
    width: 90%;
    height: 30px;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 4px #f0c14b;
      border: 2px solid #f0c14b;
    }
  }
  @media (max-width: 768px) {
    width: 100vh;
    margin-left: 2px;
    margin-right: 2px;
    height: 35px;
    input {
      height: 30px;
    }
  }
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
  @media (max-width: 768px) {
    display: none;
  }
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
  width: 32%;
  span {
    display: block;
  }
  p {
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
  p > span {
    font-size: 12px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-right: 8px;
  p {
    color: white;
    padding-top: 2px;
    line-height: 3px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;
    margin-right: 2px;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 8px;
  width: 100%;
  p {
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 7px;
  p {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 400;
    font-size: 13px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

const CartCount = styled.div`
  display: block;
`;

export default Header;
