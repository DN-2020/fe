import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, DashBoardContainer, CustomerContainer } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/manage/dashboard" component={DashBoardContainer} />
    <Route exact path="/manage/customer" component={CustomerContainer} />
  </Switch>
);

export default Routes;
