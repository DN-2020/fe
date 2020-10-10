import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import CustomerSider from '../dashboard/component/DashBoardSider';
import CustomerContent from './component/CustomerContent';
const { Content, Sider } = Layout;

const CustomerPresenter = (props) => {
  return (
    <>
      <div>
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

export default CustomerPresenter;
