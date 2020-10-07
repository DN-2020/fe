import React, { useState } from 'react';
import { Layout } from 'antd';
import DashBoardContent from './component/DashBoardContent';
import DashBoardSider from './component/DashBoardSider';
import PropTypes from 'prop-types';

const { Content, Sider } = Layout;

const DashboardPresenter = (props) => {
  const [a, setA] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setA(collapsed);
  };

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={a} onCollapse={onCollapse}>
          <DashBoardSider />
        </Sider>

        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <DashBoardContent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

DashboardPresenter.propTypes = {};

export default DashboardPresenter;
