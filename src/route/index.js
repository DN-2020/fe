import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, DashBoardContainer } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/manage/dashboard" component={DashBoardContainer} />
  </Switch>
);

export default Routes;
