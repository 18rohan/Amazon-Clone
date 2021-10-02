import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Header from "./components/Header.component";
import Home from "./components/Home.page";
import Cart from "./components/Cart.page";
import SigninPage from "./components/Signin.page";
import ProductsPage from "./components/Products.page";
import ProductDetail from "./components/ProductDetail.component.js";
import Wishlist from "./components/Wishlist.page.js";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">{/* <Login /> */}</Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route exact path="/signin">
            <SigninPage />
          </Route>
          <Route exact path="/products">
            <Header />
            <ProductsPage />
          </Route>
          <Route exact path="/wishlist">
            <Header />
            <Wishlist />
          </Route>
          <Route exact path="/:id">
            <Header />
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
