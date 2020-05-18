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
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/project" component={Project} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
