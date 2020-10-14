import React, { useState } from 'react';
import { Layout } from 'antd';
import DashBoardContent from './component/DashBoardContent';
import DashBoardSider from './component/DashBoardSider';
import PropTypes from 'prop-types';

const { Content, Sider, Header } = Layout;

const DashboardPresenter = (props) => {
  const [a, setA] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setA(collapsed);
  };

  return (
    <div>
      <Header style={style.headerLayout}>
        <h1>대시보드</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
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
    </div>
  );
};

DashboardPresenter.propTypes = {};

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

export default DashboardPresenter;
