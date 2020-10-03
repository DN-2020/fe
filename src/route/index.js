import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, AccountInfoContainer  } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/accountinfo" component={AccountInfoContainer} />
  </Switch>
);

export default Routes;
