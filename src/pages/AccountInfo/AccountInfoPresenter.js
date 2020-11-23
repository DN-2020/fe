import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Card, Button, Tabs, Modal, Row, Col, message } from 'antd';
import Search from './components/Search';
import Modify from './components/Modify';
import { bucket_url } from '../../Utils';
import InfiniteScroll from 'react-infinite-scroller';
//npm install --save @ant-design/icons
import { ConsoleSqlOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
const AccountInfoPresenter = (props) => {
  console.log(props.UserRefund);
  const [page, setPage] = useState(true);
  const [key, setKey] = useState(1);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const ChangeInfo = (e) => {
    setPage(!page);
  };
  const handleKey = (e) => {
    setKey(e);
  };
  const mdata = {
    name: '굿즈 디테일 네임',
    checkout: '2020-08-08',
    checkin: '2020-08-07',
    username: '홍길동',
    price: '30,000',
  };
  const handleIfiniteOnLoad = () => {
    setLoading(true);
    if (datas.length > 5) {
      message.warning('ddddddd');
      setLoading(false);
      sethasMore(false);
    }
    return;
  };

  const datas = props.UserInfo.map((e) => {
    return (
      <>
        <Row>
          <Col span={18} push={6}>
            <br />
            <h1>{e.goods_detail_nm}</h1>
            <p>
              {e.reservation_st} ~ {e.reservation_end}
            </p>
          </Col>
          <Col span={6} pull={18}>
            <br />
            <Card
              cover={<img src={`${bucket_url}/${e.goods_image_path}`}></img>}
            ></Card>
          </Col>
        </Row>
      </>
    );
  });

  const RefundData = props.UserRefund.map((e) => {
    return (
      <>
        <Row>
          <Col span={18} push={6}>
            <br />
            <h1>{e.goods_detail_nm}</h1>
            <p>사유:{e.refund_reason}</p>
            <p>
              {e.reservation_st} ~ {e.reservation_end}
            </p>
          </Col>
          <Col span={6} pull={18}>
            <br />
            <Card
              style={{ width: '150%', height: '5%' }}
              cover={<img src={`${bucket_url}/${e.goods_image_path}`}></img>}
            ></Card>
          </Col>
        </Row>
      </>
    );
  });

  const reviewdatas = props.UserReview.map((e) => {
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={{ textAlign: 'left' }}>{e.reservation_goods_detail}</h1>
          <p>{e.review_content}</p>
          <hr />
        </div>
      </>
    );
  });

  return (
    <>
      <div
        style={{
          display: 'flex',
          marginTop: '1%',
          width: '80%',
          marginLeft: '10%',
        }}
      >
        <div style={{ width: '30%' }}>
          <Card
            style={style.card}
            extra={
              page ? (
                <Button onClick={ChangeInfo} icon={<SettingOutlined />} />
              ) : null
            }
          >
            <div>
              {page ? (
                <Search data={props} />
              ) : (
                <Modify props={{ ChangeInfo, props }} />
              )}
            </div>
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
          <Tabs
            activeKey={key}
            defaultActiveKey="1"
            onChange={handleKey}
            style={{ width: '100%' }}
          >
            <TabPane tab="예약내역" key="1">
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                }}
                // onClick={() => showModal()}
                onClick={(e) => console.log(e)}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {datas}
                </div>
              </div>
            </TabPane>
            <TabPane tab="리뷰내역" key="2">
              {reviewdatas}
            </TabPane>
            <TabPane tab="취소" key="3">
              {RefundData}
            </TabPane>
          </Tabs>
        </div>
        <Modal
          title="예약내역"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{mdata.name}</p>
          <p>체크아웃 :{mdata.checkout}</p>
          <p>이름: {mdata.username}</p>
          <p>결제금액 :{mdata.price}</p>
        </Modal>
      </div>
    </>
  );
};

AccountInfoPresenter.propTypes = {};

const style = {
  card: {
    height: '550px',
    // borderColor: 'black',
  },
};

export default AccountInfoPresenter;
