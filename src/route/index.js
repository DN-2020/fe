import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyRouter from './CompanyRouter';
import { Main } from '../pages';

const Routes = () => (
  <Switch>
    <Route path="/company" component={CompanyRouter} />
    <Route exact path="/" component={Main}></Route>
  </Switch>
);

export default Routes;
