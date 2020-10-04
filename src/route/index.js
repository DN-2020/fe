import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../pages';
import {ProductDetail} from '../pages'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/productDetail" component={ProductDetail} />


  </Switch>
);

export default Routes;
