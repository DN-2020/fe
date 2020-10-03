import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, DetailContainer , ConfirmContainer , CancelContainer,CancelDetailContainer 
 } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/reservation/cancel/detail" component={CancelDetailContainer} />
    <Route exact path="/reservation/detail" component={DetailContainer} />
    <Route exact path="/reservation/confirm" component={ConfirmContainer} />
    <Route exact path="/reservation/cancel" component={CancelContainer} />
  </Switch>
);

export default Routes;
