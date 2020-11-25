import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import CompanySiderPresenter from './CompanySiderPresenter'
const { Content, Sider, Header } = Layout
const ProductAddContainer = (props) => {
  return <CompanySiderPresenter {...props}></CompanySiderPresenter>
}

ProductAddContainer.propTypes = {}

export default ProductAddContainer
