import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home, About, Blogs, Works, Contact, NotFoundPage } from "../pages";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/about" component={About} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/works" component={Works} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
