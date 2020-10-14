import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../pages';
import {Company} from '../pages'
import {CompanyDetail } from '../pages'
import {CompanyApprove } from '../pages'
import {CompanyApproveDetail } from '../pages'
import {Employee} from '../pages'
import {EmployeeRegister} from '../pages'
import {Department} from '../pages'
import {DepartmentRegister} from '../pages'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main}></Route>
    <Route path="/companys" component={Company} />
    <Route path="/companyDetail" component={CompanyDetail} />
    <Route path="/companyApprove" component={CompanyApprove} />
    <Route path="/companyApproveDetail" component={CompanyApproveDetail} />
    <Route path="/employee" component={Employee} />
    <Route path="/employeeRegister" component={EmployeeRegister} />
    <Route path="/department" component={Department} />
    <Route path="/departmentRegister" component={DepartmentRegister} />

  </Switch>
);

export default Routes;
