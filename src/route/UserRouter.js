import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Main,
  Search,
  ProductDetail,
  Reservation,
  AccountInfoContainer,
  LoginContainer,
  RegisterContainer,
  DetailContainer,
  ConfirmContainer,
  CancelContainer,
  CancelDetailContainer,
  ConfirmCancelContainer,
} from '../pages';
import Cus_Header from '../pages/Main/Cus_Header';
import Cus_Footer from '../pages/Main/Cus_Footer';
const UserRouter = () => (
  <>
    <Cus_Header></Cus_Header>
    <Route exact path="/" component={Main} />
    <Route exact path="/user" component={Main} />
    <Route exact path="/user/search" component={Search} />
    <Route path="/user/productDetail/:num" component={ProductDetail} />
    <Route exact path="/user/reservation/:num" component={Reservation} />
    <Route exact path="/user/accountinfo" component={AccountInfoContainer} />
    <Route exact path="/user/login" component={LoginContainer} />
    <Route exact path="/user/register" component={RegisterContainer} />
    <Route
      exact
      path="/user/cancel/:rsvnum"
      component={CancelDetailContainer}
    />
    <Route exact path="/user/detail/:num" component={DetailContainer} />
    <Route exact path="/user/confirm" component={ConfirmContainer} />
    <Route exact path="/user/cancel" component={CancelContainer} />
    <Route
      exact
      path="/user/confirm/cancel"
      component={ConfirmCancelContainer}
    />
    <Cus_Footer></Cus_Footer>
  </>
);

export default UserRouter;
