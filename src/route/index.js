import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, Search,ProductDetail,Reservation,AccountInfoContainer,LoginContainer,RegisterContainer} from '../pages';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/search" component={Search} />
    <Route path="/productDetail" component={ProductDetail} />
    <Route path="/reservation" component={Reservation} />
    <Route exact path="/accountinfo" component={AccountInfoContainer} />
    <Route exact path="/user/login" component={LoginContainer} />
    <Route exact path="/user/register" component={RegisterContainer} />

  </Switch>
);

export default Routes;
