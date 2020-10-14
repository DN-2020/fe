import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import CustomerSider from '../dashboard/component/DashBoardSider';
import CustomerContent from './component/CustomerContent';
const { Content, Sider, Header } = Layout;

const CustomerPresenter = (props) => {
  return (
    <>
      <Header style={style.headerLayout}>
        <h1>고객관리</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <CustomerSider />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <CustomerContent />
            </Content>
          </Layout>
        </Layout>
      </div>
      );
    </>
  );
};

CustomerPresenter.propTypes = {};

const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
};

export default CustomerPresenter;
