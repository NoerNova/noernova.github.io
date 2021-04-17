import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home, Contact, NotFoundPage } from "../pages";

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route path="/contact" component={Contact} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
