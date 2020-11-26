import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import CompanyHeaderPresenter from './CompanyHeaderPresenter';
const { Content, Sider, Header } = Layout;
const ProductAddContainer = (props) => {
  return <CompanyHeaderPresenter props={props}></CompanyHeaderPresenter>;
};

ProductAddContainer.propTypes = {};

export default ProductAddContainer;
