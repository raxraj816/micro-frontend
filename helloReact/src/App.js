import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";
import HelloMbs from "./components/HelloMbs";

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/mbs" component={HelloMbs} />
        </Switch>
      </Router>
    </div>
  );
};
