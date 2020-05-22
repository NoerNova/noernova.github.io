import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { About, Home, Posts, Project, NotFoundPage } from "../pages";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/about" component={About} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/project" component={Project} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
