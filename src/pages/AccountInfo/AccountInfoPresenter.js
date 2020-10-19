import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout, Card, Button, Tabs, Modal } from 'antd'
import Search from './components/Search'
import Modify from './components/Modify'
import AccountInfoSider from './components/AccountInfoSider'

const { Header, Footer, Sider, Content } = Layout
const { TabPane } = Tabs

const AccountInfoPresenter = (props) => {
  const [page, setPage] = useState(true)
  const [key, setKey] = useState(1)
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (e) => {
    setVisible(false)
  }

  const handleCancel = (e) => {
    setVisible(false)
  }

  const ChangeInfo = (e) => {
    setPage(!page)
  }
  const handleKey = (e) => {
    setKey(e)
  }
  const data = {
    name: '홍길동',
    email: 'hong12@naver.com',
    phonenum: '000-0000-0000',
  }
  const mdata = {
    name: '굿즈 디테일 네임',
    checkout: '2020-08-08',
    checkin: '2020-08-07',
    username: '홍길동',
    price: '30,000',
  }

  return (
    <>
      <div style={{ display: 'flex', marginTop: '1%', width: '80%', marginLeft: '10%' }}>
        <div style={{ width: '30%' }}>
          <Card
            style={style.card}
            extra={page ? <Button onClick={ChangeInfo}>편집하기</Button> : null}
          >
            <div>{page ? <Search data={data} /> : <Modify props={{ ChangeInfo, data }} />}</div>
          </Card>
        </div>
        <div
          style={{
            width: '60%',
            height: '10%',
            paddingBottom: '1%',
            display: 'flex',
            marginLeft: '5%',
          }}
        >
          <Tabs activeKey={key} defaultActiveKey="1" onChange={handleKey} style={{ width: '100%' }}>
            <TabPane tab="예약내역" key="1">
              <div
                style={{ display: 'flex', width: '100%', border: '0.1px solid lightgray' }}
                onClick={() => showModal()}
              >
                <Card style={{ width: '30%' }} cover={<img src="moto1.png"></img>}></Card>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h1 style={{ textAlign: 'left' }}>포르쉐 카이엔</h1>
                  <p>2020-10-17~2020-10-25 (7박8일)</p>
                </div>
              </div>
            </TabPane>
            <TabPane tab="리뷰내역" key="2">
              내용없음
            </TabPane>
            <TabPane tab="취소" key="3">
              <div style={{ display: 'flex', width: '100%', border: '0.1px solid lightgray' }}>
                <Card style={{ width: '30%' }} cover={<img src="moto1.png"></img>}></Card>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h1 style={{ textAlign: 'left' }}>포르쉐 카이엔</h1>
                  <p>2020-10-17~2020-10-25 (7박8일)</p>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <Modal title="예약내역" visible={visible} onOk={handleOk} onCancel={handleCancel}>
          <p>{mdata.name}</p>
          <p>체크아웃 :{mdata.checkout}</p>
          <p>이름: {mdata.username}</p>
          <p>결제금액 :{mdata.price}</p>
        </Modal>
      </div>
    </>
  )
}

AccountInfoPresenter.propTypes = {}

const style = {
  card: {
    height: '500px',
    borderColor: 'black',
  },
}

export default AccountInfoPresenter
