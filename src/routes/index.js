import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PrivateRoute} from './privateRoute';

// Pages
import Login from '../pages/Login';
import Campfire from '../pages/Campfire';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <PrivateRoute path="/campfire" component={Campfire} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
