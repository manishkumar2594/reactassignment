import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./signin"
import SignUp from "./signup"
import SimpleTable from "./table"
import Welcome from "./welcome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Welcome} /> */}
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/user" exact component={SimpleTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
