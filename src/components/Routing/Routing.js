import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import ProductDetail from "../ProductDetail/ProductDetail.js";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/:id" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
