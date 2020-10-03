import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main ,LoginContainer , RegisterContainer } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/user/login" component={LoginContainer} />
    <Route exact path="/user/register" component={RegisterContainer} />
  </Switch>
);

export default Routes;
