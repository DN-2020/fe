import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DashBoardContainer, CustomerContainer } from '../pages';

const CompanyRouter = () => (
  <>
    <Route exact path="/company/dashboard" component={DashBoardContainer} />
    <Route exact path="/company/customer" component={CustomerContainer} />
  </>
);

export default CompanyRouter;
