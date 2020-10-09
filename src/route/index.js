import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Search,ProductDetail,Reservation} from '../pages';
import {Reservation} from '../pages'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/search" component={Search} />
    <Route path="/productDetail" component={ProductDetail} />
    <Route path="/reservation" component={Reservation} />

  </Switch>
);

export default Routes;
