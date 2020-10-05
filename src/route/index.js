import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, DetailContainer , ConfirmContainer , CancelContainer,CancelDetailContainer,ConfirmCancelContainer 
 } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/reservation/cancel/:rsvnum" component={CancelDetailContainer} />
    <Route exact path="/reservation/detail" component={DetailContainer} />
    <Route exact path="/reservation/confirm" component={ConfirmContainer} />
    <Route exact path="/reservation/cancel" component={CancelContainer} />
    <Route
      exact
      path="/reservation/confirm/cancel"
      component={ConfirmCancelContainer}
    />
  </Switch>
);

export default Routes;
