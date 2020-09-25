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
      <Route path="/about" component={About} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/works" component={Works} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
