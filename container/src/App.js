import React from "react";
import "antd/dist/antd.css";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppLayout from "./Layout";

import HelloReactApp from "./pages/HelloReactApp";
import HelloFlowrx from "./components/HelloFlowrx";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <AppLayout>
        <Switch>
          <Route exact path="/mbs" component={HelloReactApp} />
          <Route path="/" component={HelloFlowrx} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
