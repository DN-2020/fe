import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../pages';
import {Reservation} from '../pages'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/reservation" component={Reservation} />

  </Switch>
);

export default Routes;
