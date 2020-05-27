import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
