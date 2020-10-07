import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

const DashBoardSider = (props) => {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link to="/manage/dashboard">대시보드</Link>
        </Menu.Item>
        <SubMenu key="sub1" title="상품 및 예약">
          <Menu.Item key="2">상품관리</Menu.Item>
          <Menu.Item key="3">예약관리</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="리뷰 댓글 관리">
          <Menu.Item key="4">리뷰관리</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="고객관리">
          <Menu.Item key="5">고객관리</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="회사부서관리">
          <Menu.Item key="6">회사관리</Menu.Item>
          <Menu.Item key="7">부서관리</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title="사원관리">
          <Menu.Item key="8">사원관리</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

DashBoardSider.propTypes = {};

export default DashBoardSider;
