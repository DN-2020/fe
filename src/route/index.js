import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserRouter from './UserRouter'
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
} from '../pages'
import CompanyRouter from './CompanyRouter'
/*
 * @title 라우팅 및 서브라우팅
 * @description /user 사용자 /company 회사측
 * @param {  }
 * @return {  }
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={UserRouter}></Route>
    <Route path="/user" component={UserRouter}></Route>
    <Route path="/company" component={CompanyRouter}></Route>
  </Switch>
)

export default Routes
