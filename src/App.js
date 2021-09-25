import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import components
import Header from "./components/Header.component";
import Home from "./components/Home.page";
import Cart from "./components/Cart.page";
import SigninPage from "./components/Signin.page";
import ProductsPage from "./components/Products.page";

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
