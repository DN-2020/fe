import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main, Search,ProductDetail,Reservation,AccountInfoContainer,LoginContainer,RegisterContainer,DetailContainer , ConfirmContainer , CancelContainer,CancelDetailContainer,ConfirmCancelContainer} from '../pages';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/search" component={Search} />
    <Route path="/productDetail" component={ProductDetail} />
    <Route exact path="/reservation/:num" component={Reservation} />
    <Route exact path="/accountinfo" component={AccountInfoContainer} />
    <Route exact path="/user/login" component={LoginContainer} />
    <Route exact path="/user/register" component={RegisterContainer} />
    <Route exact path="/reservation/cancel/:rsvnum" component={CancelDetailContainer} />
    <Route exact path="/reservation/detail/:num" component={DetailContainer} />
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
