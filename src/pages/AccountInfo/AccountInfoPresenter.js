import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Card,
  Button,
  Tabs,
  Modal,
  Divider,
  List,
  Rate,
  Popconfirm,
  Input,
  InputNumber,
  Form,
} from 'antd';
import { get } from 'js-cookie';
import Search from './components/Search';
import Modify from './components/Modify';
import Axios from 'axios';
import { bucket_url } from '../../Utils';
import { backend_url } from '../../Utils';
import InfiniteScroll from 'react-infinite-scroller';
import Reservation_Cancel from '../../api/Reservation_Cancel';
import Review_modify from '../../api/Review_modify';
import { ConsoleSqlOutlined, SettingOutlined } from '@ant-design/icons';
//npm install react-html-parser
//npm install --save @ant-design/icons
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;

const AccountInfoPresenter = (props) => {
  console.log(props.UserInfo[0].reservation_yn);
  const reservation_result = props.UserInfo.map((e) => {
    if (e.reservation_yn != 'n') {
      return e;
    }
  });
  console.log(reservation_result);
  const [page, setPage] = useState(true);
  const [key, setKey] = useState(1);
  const [visible, setVisible] = useState(false);
  const [reViewDetail, setReViewDetail] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [hasMore, sethasMore] = useState(true);
  const [modalData, setModalData] = useState([]);
  const [modalReviewData, setModalReviewData] = useState([]);
  const [review_title, setReview_title] = useState();
  const [review_content, setReview_content] = useState();
  const [review_grade, setReview_grade] = useState();
  const [refund_reason, setRefund_reason] = useState();
  const [refund_nm, setRefund_nm] = useState();
  const [cancel, setCancel] = useState(false);
  const [visible_refund, setVisible_refund] = useState(false);
  const titleChange = (e) => {
    setReview_title(e.currentTarget.value);
  };
  const review_contentChange = (e) => {
    setReview_content(e.currentTarget.value);
  };
  const review_gradeChange = (e) => {
    console.log(e);
    setReview_grade(e);
  };

  const showModal = (e) => {
    console.log(e);
    setVisible(true);
  };

  const reviewModify = () => {
    const body = {
      review_title: review_title,
      review_content: review_content,
      review_grade: review_grade,
    };

    Review_modify.review_Modify(modalReviewData.review_seq, body)
      .then(() => {
        setReViewDetail(false);
      })
      .then(() => {
        alert('수정완료');
      });
  };
  const handleOk = (e) => {
    setVisible(false);
    setReViewDetail(false);
    setVisible_refund(false);
  };
  const refund = {
    refund_reason: refund_reason,
    refund_nm: refund_nm,
  };

  const Cancel_refund = () => {
    setCancel(true);
  };
  const refund_re_onchange = (e) => {
    setRefund_reason(e.currentTarget.value);
  };
  const Refund_nm_onchange = (e) => {
    setRefund_nm(e.currentTarget.value);
  };
  const Cancel = () => {
    Reservation_Cancel.deleteReservation(modalData.reservation_seq, refund)
      .then(() => setVisible(false))
      .then(() => {
        alert('예약 취소 되었습니다');
      });
  };
  const handleCancel = (e) => {
    setVisible(false);
    setReViewDetail(false);
    setVisible_refund(false);
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
  const CancelReservation = () => {
    console.log('eddd');
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
                        <a>
                          <img
                            width={272}
                            alt="logo"
                            src={`${bucket_url}/${e.goods_image_path}`}
                          />
                        </a>
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
                    <div
                      onClick={() => {
                        console.log(e);
                        setReViewDetail(true);
                        setModalReviewData(e);
                        setReview_title(e.review_title);
                        setReview_content(e.review_content);
                        setReview_grade(e.review_grade);
                      }}
                    >
                      <p>
                        <a> {e.review_title}</a>
                      </p>
                    </div>
                    <p>
                      <Rate disabled allowHalf defaultValue={e.review_grade} />
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
                          setCancel(false);
                          setVisible_refund(true);
                        }}
                      >
                        <a>
                          <img
                            width={272}
                            // alt="logo"
                            src={`${bucket_url}/${e.goods_image_path}`}
                          />
                        </a>
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
          {cancel ? (
            <div>
              <Form.Item label="제목">
                <Input value={refund_nm} onChange={Refund_nm_onchange}></Input>
              </Form.Item>
              <Form.Item label="사유">
                <Input
                  value={refund_reason}
                  onChange={refund_re_onchange}
                ></Input>
              </Form.Item>
              <Button onClick={Cancel}>예약취소</Button>
            </div>
          ) : (
            <Popconfirm
              title="예약을 취소하시겠습니까?"
              onConfirm={Cancel_refund}
              onCancel={() => {
                console.log('예약취소 안하기');
              }}
              okText="확인"
              cancelText="취소"
            >
              <Button>예약취소</Button>
            </Popconfirm>
          )}
        </Modal>

        <Modal
          // title="예약내역"
          width={700}
          visible={visible_refund}
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

        <Modal
          width={700}
          visible={reViewDetail}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{modalReviewData.reservation_goods_detail}</p>
          <Form.Item label="제목">
            <Input
              type="text"
              onChange={titleChange}
              value={review_title}
            ></Input>
          </Form.Item>
          <Form.Item label="내용">
            <Input
              type="text"
              onChange={review_contentChange}
              value={review_content}
            ></Input>
          </Form.Item>
          <Form.Item label="별점">
            <InputNumber
              min={0}
              max={5}
              step={0.5}
              defaultValue={review_grade}
              onChange={review_gradeChange}
            />
            {console.log(review_grade)}
          </Form.Item>
          <Button onClick={reviewModify}>수정</Button>
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
