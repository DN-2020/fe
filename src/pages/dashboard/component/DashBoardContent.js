import React, { useState } from 'react';
import '../DashBoard.css';
import { Card, Calendar, Badge } from 'antd';
import PropTypes from 'prop-types';
const { Meta } = Card;
const DashBoardContent = (props) => {
  const onPanelChange = (e) => {
    console.log(e.format('YYYY-MM-DD'));
    seta(dateCellRender(e));
    setDate(e.format('YYYY-MM-DD'));
  };
  const [date, setDate] = useState();
  const [a, seta] = useState();
  const [b, setB] = useState();

  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case (8, 9):
        listData = [
          { id: 1, type: 'warning', title: '숙소', content: '예약내역8' },
          { id: 2, type: 'success', title: '숙소', content: '예약내역8' },
        ];
        break;
      case 10:
        listData = [
          { id: 1, type: 'warning', title: '숙소', content: '예약내역10' },
          { id: 2, type: 'success', title: '숙소', content: '예약내역10' },
        ];
        break;
      case 15:
        listData = [
          { id: 1, type: 'warning', title: '숙소', content: '예약내역15' },
          { id: 2, type: 'success', title: '숙소', content: '예약내역 15' },
          { id: 3, type: 'error', title: '숙소', content: '예약내역 15' },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.id}>
            {item.id}
            {setB(item.content)}{' '}
          </li>
        ))}
      </ul>
    );
  };

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
          <Calendar
            onSelect={onPanelChange}
            dateCellRender={dateCellRender}
            className="CalendarStyle"
          />
        </div>
        <div id="nav">
          <Card title="예약관리" bordered={true}>
            <Meta
              title=""
              description={
                <p>
                  {' '}
                  {date} {a}
                </p>
              }
              className="navMeta"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

DashBoardContent.propTypes = {};

export default DashBoardContent;
