import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Deals from "./Deals/Deals";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Components/NotFound/NotFound";
import Review from "./Components/Review/Review";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/orders">
          <Orders></Orders>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/deals">
          <Deals></Deals>
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
