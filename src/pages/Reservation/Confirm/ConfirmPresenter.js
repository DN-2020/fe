import React from 'react'
import PropTypes from 'prop-types'
import ConfirmSide from './components/ConfirmSide'
// import ConfirmSide from '../../AccountInfo/components/AccountInfoSider';
import ConfirmContent from './components/ConfirmContent'
import { Layout, Menu, Avatar, List } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const ConfirmPresenter = (props) => {
  const data = {
    name: '굿즈 디테일 네임',
    checkout: '2020-08-08',
    checkin: '2020-08-07',
    username: '홍길동',
    price: '30,000',
  }

  return (
    <>
      <Layout style={{ background: 'white', marginTop: '3%' }}>
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
  )
}

ConfirmPresenter.propTypes = {}

const style = {
  ContentLayout: {
    border: '0.1px solid lightgray',
    marginRight: 'auto',
    marginTop: '3%',
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
    textAlign: 'left',
    fontSize: ' 30pt',
    marginLeft: '13%',
  },
}

export default ConfirmPresenter
