import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ConfirmSide from '../components/ConfirmSide';
import ConfrimCancelContent from '../components/ConfirmCancelContent';

const { Sider, Content } = Layout;

const ConfirmCancelPresenter = (props) => {
  const data = {
    name: '굿즈 디테일 네임',
    checkout: '2020-08-08',
    checkin: '2020-08-07',
    username: '홍길동',
    price: '30,000',
    cancelreason: '재예약을 위해',
  };

  return (
    <>
      <Layout>
        <h style={style.hStyle}>예약내역 </h>
        <Layout style={style.ContentLayout}>
          <Sider style={style.Sider}>
            <ConfirmSide />
          </Sider>

          <Content style={{ height: 500 }}>
            <ConfrimCancelContent data={data} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

ConfirmCancelPresenter.propTypes = {};

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
  hStyle: {
    fontSize: ' 45pt',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default ConfirmCancelPresenter;
