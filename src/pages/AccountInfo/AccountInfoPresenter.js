import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Card,
  Button,
  Tabs,
  Modal,
  Row,
  Col,
  message,
  Divider,
  List,
  Avatar,
  Rate,
} from 'antd';
import Search from './components/Search';
import Modify from './components/Modify';
import { bucket_url } from '../../Utils';
import InfiniteScroll from 'react-infinite-scroller';
//npm install --save @ant-design/icons
import { ConsoleSqlOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
const AccountInfoPresenter = (props) => {
  const [page, setPage] = useState(true);
  const [key, setKey] = useState(1);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const [modalData, setModalData] = useState([]);
  const showModal = (e) => {
    console.log(e);
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
          <Divider plain></Divider>
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
              <List
                pagination={true}
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={props.UserInfo.map((e) => e)}
                renderItem={(e) => (
                  <List.Item multipleLine>
                    <div
                      onClick={() => {
                        console.log(e);
                        setModalData(e);
                        setVisible(true);
                      }}
                    >
                      {
                        <img
                          width={272}
                          alt="logo"
                          src={`${bucket_url}/${e.goods_image_path}`}
                        />
                      }
                    </div>
                    <List.Item.Meta
                      title={e.goods_detail_nm}
                      description={`${e.reservation_st} ~ ${e.reservation_end}`}
                    />
                    <br />
                    <br />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="리뷰내역" key="2">
              <List
                pagination={true}
                size="small"
                // header={<div> 리뷰내역</div>}
                dataSource={props.UserReview.map((e) => e)}
                renderItem={(e) => (
                  <List.Item>
                    <p>{e.reservation_goods_detail}</p>
                    <p>{e.review_content}</p>
                    <p>
                      <Rate disabled defaultValue={e.review_grade} />
                    </p>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="취소내역" key="3">
              <List
                pagination={true}
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={props.UserRefund.map((e) => e)}
                renderItem={(e) => (
                  <List.Item>
                    {
                      <div
                        onClick={() => {
                          console.log(e);
                          setModalData(e);
                          setVisible(true);
                        }}
                      >
                        <img
                          width={272}
                          // alt="logo"
                          src={`${bucket_url}/${e.goods_image_path}`}
                        />
                      </div>
                    }
                    <List.Item.Meta
                      title={e.goods_detail_nm}
                      description={`사유: ${e.refund_reason}`}
                    />
                    <br />
                    <br />
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </div>
        <Modal
          // title="예약내역"
          width={700}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {console.log(modalData)}
          <img
            width={500}
            style={{ marginLeft: '10%', marginBottom: '5%' }}
            alt="logo"
            src={`${bucket_url}/${modalData.goods_image_path}`}
          />
          <Divider />
          <p>상품명 : {modalData.reservation_goods_detail}</p>
          <Divider />
          <p>결제 : {modalData.approval_method}</p>
          <Divider />
          <p>금액 : {modalData.reservation_total_price}</p>
          <Divider />
          <p>내용 : {modalData.goods_detail_expression}</p>
          <Divider />
          <p>주소 : {modalData.goods_address}</p>
          <Divider />
          <p>
            기간 :{' '}
            {`${modalData.reservation_st} ~ ${modalData.reservation_end}`}
          </p>
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
