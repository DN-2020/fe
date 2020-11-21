import React, { useState } from 'react';
import '../DashBoard.css';
import { Card, Layout } from 'antd';
import Calendar1 from './Calendar';
import PropTypes from 'prop-types';
const { Meta } = Card;
const DashBoardContent = (props) => {
  console.log('scheduled : ' + props.props.scheduled);
  console.log('complete : ' + props.props.complete);
  console.log('Count :' + props.props.Count);
  console.log('AllMonney :' + props.props.AllMonney);

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
        {/**         <div>
          {' '}
          <Card title="입금대기" bordered={true}>
            <Meta title="" description=" 12건" />
          </Card>
        </div>*/}
        <div>
          {' '}
          {/**           <Card title="예약 횟수" bordered={true}>
            <Meta description=" 12건" />
  </Card>**/}
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
            <p>예약상세</p>
            <br />
            상세 명:{content}
            <br />
            예약자: {reservation_nm}
            <br />
            결제방법: {approval_method}
            <br />
            금액 : {reservation_total_price}원
          </div>
        ) : (
          <div id="nav">
            <p>예약상세</p>{' '}
          </div>
        )}
      </div>
    </>
  );
};

DashBoardContent.propTypes = {};

export default DashBoardContent;
