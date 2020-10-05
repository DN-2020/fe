import React, { useState } from 'react';
import '../DashBoard.css';
import { Card, Calendar, Layout } from 'antd';
import PropTypes from 'prop-types';
const { Meta } = Card;
const DashBoardContent = (props) => {
  const onPanelChange = (value) => {
    console.log(value.format('YYYY-MM-DD'));
    setDate(value.format('YYYY-MM-DD'));
  };
  const [date, setDate] = useState();

  return (
    <>
      <h2>대시보드</h2>
      <div id="header">
        <div>
          {' '}
          <Card title="예약대기" bordered={true}>
            12건
          </Card>
        </div>
        <div>
          {' '}
          <Card title="예약완료" bordered={true}>
            12건
          </Card>
        </div>
        <div>
          {' '}
          <Card title="입금대기" bordered={true}>
            12건
          </Card>
        </div>
        <div>
          {' '}
          <Card title="문의" bordered={true}>
            12건
          </Card>
        </div>
        <div>
          {' '}
          <Card title="매출" bordered={true}>
            5,000,000
          </Card>
        </div>
      </div>
      <div id="aaa">
        <div id="section">
          <Calendar onSelect={onPanelChange} className="CalendarStyle" />
        </div>
        <div id="nav">
          <Card title="예약관리" bordered={true}>
            <Meta title="" description={date} className="navMeta" />
          </Card>
        </div>
      </div>
    </>
  );
};

DashBoardContent.propTypes = {};

export default DashBoardContent;
