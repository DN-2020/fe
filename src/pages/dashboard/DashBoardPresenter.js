import React, { useState } from 'react';
import { Layout } from 'antd';
import DashBoardContent from './component/DashBoardContent';
import DashBoardSider from './component/DashBoardSider';
import PropTypes from 'prop-types';

const { Content, Sider, Header } = Layout;

const DashboardPresenter = (props) => {
  // console.log(props.arr1[0]);
  const [a, setA] = useState(false);
  const onCollapse = (collapsed) => {
    setA(collapsed);
  };

  return (
    <div>
      <Header style={style.headerLayout}>
        <h1>{props.company_nm}</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <Layout style={{ minHeight: '100vh' }}>
          <Layout className="site-layout">
            <Content
              style={{
                marginTop: '1%',
                marginLeft: '1%',
                marginRight: '1%',
                background: 'white',
              }}
            >
              <DashBoardContent props={props} />
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
