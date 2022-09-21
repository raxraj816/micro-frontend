import React from "react";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloReactApp from "./components/HelloReactApp";
import HelloFlowrx from "./components/HelloFlowrx";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <Link to="/">FlowRx</Link>
    <br />
    <Link to="/mbs">MBS</Link>
  </div>
);

export default () => {
  return (
    <Router history={history}>
      <Header />
      <hr />
      <Switch>
        <Route path="/mbs" component={HelloReactApp} />
        <Route path="/" component={HelloFlowrx} />
      </Switch>
    </Router>
  );
};
