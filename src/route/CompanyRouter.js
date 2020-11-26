import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { bucket_url, deleteCookie, getCookie } from '../Utils';
import { Layout, Menu, Breadcrumb } from 'antd';

import {
  ProductListContainer,
  ProductDetailContainer,
  ProductUpdateContainer,
  ProductAddContainer,
  ResListContainer,
  ReviewListContainer,
  ReviewDetailContainer,
  DashBoardContainer,
  CustomerContainer,
  Company,
  CompanyDetail,
  CompanyApprove,
  CompanyApproveDetail,
  Employee,
  EmployeeRegister,
  EmployeeDetail,
  Department,
  DepartmentRegister,
  DepartmentDetail,
  CompanyLogin,
  CompanySider,
  CompanyHeader,
} from '../pages';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

const CompanyRouter = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Route path="/company" component={CompanySider}></Route>
      <Layout className="site-layout">
        <Route path="/company" component={CompanyHeader}></Route>
        <Route
          exact
          path="/company/dashboard"
          component={DashBoardContainer}
        ></Route>
        <Route exact path="/company/login" component={CompanyLogin}></Route>
        <Route
          exact
          path="/company/product"
          component={ProductListContainer}
        ></Route>
        <Route
          exact
          path="/company/product/:num"
          component={ProductDetailContainer}
        />
        <Route
          exact
          path="/company/product/update/:num"
          component={ProductUpdateContainer}
        ></Route>
        <Route
          exact
          path="/company/new/product"
          component={ProductAddContainer}
        ></Route>
        <Route
          exact
          path="/company/reservation"
          component={ResListContainer}
        ></Route>
        <Route exact path="/company/review" component={ReviewListContainer} />
        <Route
          exact
          path="/company/review/:num"
          component={ReviewDetailContainer}
        />
        <Route exact path="/company/companys" component={Company} />
        <Route exact path="/company/companyDetail" component={CompanyDetail} />
        <Route
          exact
          path="/company/companyApprove"
          component={CompanyApprove}
        />
        <Route
          exact
          path="/company/companyApproveDetail"
          component={CompanyApproveDetail}
        />
        <Route exact path="/company/employee" component={Employee} />
        <Route
          exact
          path="/company/employeeRegister"
          component={EmployeeRegister}
        />
        <Route
          exact
          path="/company/employeeDetail/:num"
          component={EmployeeDetail}
        />
        <Route exact path="/company/department" component={Department} />
        <Route
          exact
          path="/company/departmentRegister"
          component={DepartmentRegister}
        />
        <Route
          exact
          path="/company/departmentDetail/:num"
          component={DepartmentDetail}
        />

        <Route exact path="/company/customer" component={CustomerContainer} />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CompanyRouter;
