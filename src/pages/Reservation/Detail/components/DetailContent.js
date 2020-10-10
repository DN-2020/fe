import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Steps, message } from 'antd';
import { Link } from 'react-router-dom';

const { Step } = Steps;

const DetailContent = (props) => {
  return (
    <>
      <div>
        <div style={style.StepStyle}>
          <Steps size="small" current={1}>
            <Step title="예약중" />
            <Step title="예약완료" />
          </Steps>
        </div>

        <Step />
        <div align="center">
          <div>
            <table border="1" style={style.ReservationTableStyle}>
              <tbody align="center">
                <tr>
                  <td colSpan="4" style={{ fontSize: '20pt' }}>
                    예약상세
                  </td>
                </tr>
                <tr>
                  <td>
                    예약 <br />
                    번호
                  </td>
                  <td colSpan="3" style={{ height: '30%' }}>
                    123456
                  </td>
                </tr>
                <tr>
                  <td>
                    체크 <br /> 인
                  </td>
                  <td>2020-08-07 13:30</td>
                  <td>
                    체크 <br /> 아웃
                  </td>
                  <td>2020-08-08 11:00</td>
                </tr>
                <tr>
                  <td>옵션</td>
                  <td colSpan="3">굿즈 네임 디테일</td>
                </tr>
                <tr>
                  <td>
                    여행 <br /> 컨셉
                  </td>
                  <td colSpan="3">연인과 함께 하는</td>
                </tr>
                <tr>
                  <td>
                    구매자 <br />
                    정보
                  </td>
                  <td colSpan="3">
                    이메일 : abc@naver.com <br /> 영문이름: hong <br /> 한글이름
                    : 홍길동 <br /> 성별 : 남 <br /> 숙소도착 : 13:40
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <table border="1" style={style.PriceTable}>
            <tbody align="center">
              <tr>
                <td colSpan="3" style={{ fontSize: '20pt' }}>
                  결제 금액{' '}
                  <Button style={style.ReceiptButtonStyle}>영수증</Button>
                </td>
              </tr>
              <tr>
                <td>결제 일</td>
                <td>2020-07-25 21:35</td>
                <td>
                  여행금액 3200
                  <br /> 할인금액 2000
                </td>
              </tr>
              <tr>
                <td>결제 수단</td>
                <td>토스</td>
                <td>결제 금액 30000</td>
              </tr>
            </tbody>
          </table>
          <Button type="primary" style={style.CancelButtonStyle}>
            <Link to="/cancel">취소하기</Link>
          </Button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

DetailContent.propTypes = {};

const style = {
  OutlineStyle: {
    height: '750px',
  },
  StepStyle: {
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '2%',
    marginBottom: '2%',
  },

  ReservationTableStyle: {
    width: 400,
    height: 400,
  },
  TdStyle: {
    fontSize: '20pt',
  },

  ReceiptButtonStyle: {
    marginLeft: '15%',
    marginBottom: '2%',
  },
  CancelButtonStyle: {
    marginTop: '3%',
    marginBottom: '20%',
  },
  PriceTable: {
    marginTop: '2%',
    width: 400,
    height: 200,
  },
};

export default DetailContent;
