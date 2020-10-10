import React, { useState } from 'react';
import '../DashBoard.css';
import { Card } from 'antd';
import Calendar1 from './Calendar';
import PropTypes from 'prop-types';
const { Meta } = Card;
const DashBoardContent = (props) => {
  const [calEvent, setcalEvent] = useState('');

  return (
    <>
      <h2>대시보드</h2>
      <div id="header">
        <div>
          {' '}
          <Card title="예약대기" bordered={true}>
            <Meta description=" 12건" />
          </Card>
        </div>
        <div>
          {' '}
          <Card title="예약완료" bordered={true}>
            <Meta description=" 12건" />
          </Card>
        </div>
        <div>
          {' '}
          <Card title="입금대기" bordered={true}>
            <Meta title="" description=" 12건" />
          </Card>
        </div>
        <div>
          {' '}
          <Card title="문의" bordered={true}>
            <Meta description=" 12건" />
          </Card>
        </div>
        <div>
          {' '}
          <Card title="매출" bordered={true}>
            <Meta description=" 5,000,000" />
          </Card>
        </div>
      </div>
      <div id="aaa">
        <div id="section">
          <Calendar1 setcalEvent={setcalEvent} />
        </div>
        <div id="nav">
          <p>예약관리</p>
          <br />
          {calEvent}
        </div>
      </div>
    </>
  );
};

DashBoardContent.propTypes = {};

export default DashBoardContent;
