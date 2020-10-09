import React from 'react';
import PropTypes from 'prop-types';
import ConfirmSide from './components/ConfirmSide';
// import ConfirmSide from '../../AccountInfo/components/AccountInfoSider';
import ConfirmContent from './components/ConfirmContent';
import { Layout, Menu, Avatar, List } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const ConfirmPresenter = (props) => {
  const data = {
    name: '굿즈 디테일 네임',
    checkout: '2020-08-08',
    checkin: '2020-08-07',
    username: '홍길동',
    price: '30,000',
  };

  return (
    <>
      <Layout>
        <h style={style.Hstyle}>예약내역</h>
        <Layout style={style.ContentLayout}>
          <Sider style={style.Sider}>
            <ConfirmSide />
          </Sider>

          <Content style={{ height: 500 }}>
            <ConfirmContent data={data} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

ConfirmPresenter.propTypes = {};

const style = {
  ContentLayout: {
    marginRight: 'auto',
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    width: 950,
  },
  Sider: {
    backgroundColor: '#F2F2F2',
    height: 100,
    marginTop: '8%',
  },
  Hstyle: {
    fontSize: ' 45pt',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default ConfirmPresenter;
