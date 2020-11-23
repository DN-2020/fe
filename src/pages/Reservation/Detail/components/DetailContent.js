import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Steps, message } from 'antd'
import { Link } from 'react-router-dom'
import { GyunReservation } from '../../../../api'
import GyunLoginAPI from '../../../../api/GyunLoginAPI'

const { Step } = Steps

const DetailContent = (props) => {
  const [reservation, setReservation] = useState(null)
  const [user, setUser] = useState(null)
  const { num } = props.props.props.location.state
  useEffect(() => {
    console.log(props)
    getReservation()
    getUser()
  }, [])
  const getUser = async () => {
    const response = await GyunLoginAPI.getUser()
    setUser(response.data)
  }
  const getReservation = async () => {
    const response = await GyunReservation.getReservation(num)
    console.log(response.data)
    setReservation(response.data)
  }
  return (
    <>
      {reservation != null && user != null ? (
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
                      {reservation.reservation_seq}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      체크 <br /> 인
                    </td>
                    <td>{reservation.reservation_st}</td>
                    <td>
                      체크 <br /> 아웃
                    </td>
                    <td>{reservation.reservation_end}</td>
                  </tr>

                  <tr>
                    <td>
                      구매자 <br />
                      정보
                    </td>
                    <td colSpan="3">
                      이메일 :{user.customer_email} <br /> 한글이름 :{reservation.reservation_nm}{' '}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table border="1" style={style.PriceTable}>
              <tbody align="center">
                <tr>
                  <td colSpan="3" style={{ fontSize: '20pt' }}>
                    결제 금액 <Button style={style.ReceiptButtonStyle}>영수증</Button>
                  </td>
                </tr>
                <tr>
                  <td>결제 일</td>
                  <td>{reservation.reservation_createAt.slice(0, 18)}</td>
                  <td>
                    여행금액 {reservation.goods_detail_price}
                    <br /> 할인금액 2000
                  </td>
                </tr>
                <tr>
                  <td>결제 수단</td>
                  <td>{reservation.approval_method}</td>
                  <td>결제 금액 {reservation.approval_total_price}</td>
                </tr>
              </tbody>
            </table>
            <Button type="primary" style={style.CancelButtonStyle}>
              <Link to="/user/cancel">취소하기</Link>
            </Button>
          </div>
          <br />
          <br />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

DetailContent.propTypes = {}

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
}

export default DetailContent
