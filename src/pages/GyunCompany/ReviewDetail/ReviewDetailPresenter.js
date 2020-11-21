import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Layout, Table, Menu, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const { Header, Footer, Sider, Content } = Layout;

const ReviewDetailPresenter = (props) => {
  console.log(props.props.history.location.state.detail.name);
  let history = useHistory();
  const data = {
    seq: '1',
    starRate: '4',
    id: '사용자 아이디',
    content: '내용',
  };
  const deleteReview = () => {
    history.push('/company/review');
  };
  const cancelReview = () => {
    history.push('/company/review');
  };
  return (
    <>
      <Header style={style.headerLayout}>
        <h1>예약상세</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <div className="contentContent" style={style.content}>
          <Layout className="calendarContainer">
            <Content style={{ background: 'white' }}>
              <div className="contentContainer" style={style.container}>
                <div
                  className="explainContainer"
                  style={{ ...style.contentLayout, width: '100%' }}
                >
                  <div style={style.itemContainer}>
                    상품상세명:
                    {props.props.history.location.state.detail.goods_detail_nm}
                  </div>
                  <div style={style.itemContainer}>
                    이름:{props.props.history.location.state.detail.name}
                  </div>
                  <div style={style.itemContainer}>
                    내용:{props.props.history.location.state.detail.review}
                  </div>
                  <div style={style.itemContainer}>
                    별점:{props.props.history.location.state.detail.starRate}
                  </div>

                  <div>
                    <Button onClick={deleteReview}>삭제</Button>
                    <Button onClick={cancelReview}>취소</Button>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </>
  );
};
ReviewDetailPresenter.propTypes = {};
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  infomationContainer: {
    fontSize: '20px',
    textAlign: 'left',
    width: '49%',
  },
  contentLayout: {
    background: 'white',
    padding: 24,
    minHeight: 360,
    marginTop: '10px',
    marginLeft: '1%',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  itemContainer: {
    borderTop: '1px solid #ebebeb',
    marginLeft: '35%',
    marginRight: '35%',
    padding: '5px',
  },
  imageContainer: {},
  explainContent: {
    height: '80%',
  },
  explainTitle: {
    height: '10%',
  },
  content: {
    background: 'white',
    width: '90%',
    margin: '1%',
  },
  calendarContainer: {
    background: 'white',
  },
};
export default ReviewDetailPresenter;
