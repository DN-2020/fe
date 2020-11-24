import React, { useState } from 'react';
import '../DashBoard.css';
import { Card, Layout, Divider } from 'antd';
import Calendar1 from './Calendar';
import PropTypes from 'prop-types';
const { Meta } = Card;
const DashBoardContent = (props) => {
  const [content, setcontent] = useState();
  const [reservation_nm, setreservation_nm] = useState();
  const [approval_method, setapproval_method] = useState();
  const [reservation_total_price, setreservation_total_price] = useState(0);

  return (
    <>
      <div id="header">
        <div>
          {' '}
          <Card title="예약대기" bordered={true}>
            <Meta description={props.props.scheduled} />
          </Card>
        </div>
        <div>
          {' '}
          <Card title="예약완료" bordered={true}>
            <Meta description={props.props.complete} />
          </Card>
        </div>

        <div>
          {' '}
          <Card title="매출" bordered={true}>
            <Meta description={props.props.AllMonney} />
          </Card>
        </div>
      </div>
      <div id="aaa">
        <div id="section">
          {/**<Calendar1 setcalEvent={setcalEvent} />**/}
          <Calendar1
            props={props.props}
            // states={
            //   (setcontent,
            //   setreservation_nm,
            //   setapproval_method,
            //   setreservation_total_price)
            // }
            setcontent={setcontent}
            setreservation_nm={setreservation_nm}
            setapproval_method={setapproval_method}
            setreservation_total_price={setreservation_total_price}
          />
        </div>
        {reservation_total_price ? (
          <div id="nav">
            <h1>예약상세</h1>
            <br />
            상세 명:{content}
            <br />
            <Divider />
            예약자: {reservation_nm}
            <br />
            <Divider />
            결제방법: {approval_method}
            <br />
            <Divider />
            금액 : {reservation_total_price}원
            <Divider />
          </div>
        ) : (
          <div id="nav">
            <h1>예약상세</h1>{' '}
          </div>
        )}
      </div>
    </>
  );
};

DashBoardContent.propTypes = {};

export default DashBoardContent;
