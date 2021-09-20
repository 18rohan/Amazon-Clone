import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";

// Import components
import Header from "./components/Header.component";
import Home from "./components/Home.page";


const App = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/login">
            {/* <Login /> */}
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
