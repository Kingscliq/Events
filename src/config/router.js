import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import BrowseEvents from "../pages/app/browse-events";
import EventPreview from "../pages/app/browse-events/event-preview";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/signup";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/event-preview" component={EventPreview} />
        <Route exact path="/browse-events" component={BrowseEvents} />
      </Switch>
    </Router>
  );
};

export default Routes;
