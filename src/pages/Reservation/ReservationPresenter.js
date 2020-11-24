import React, { useState, useEffect } from 'react'
import {
  DatePicker,
  Checkbox,
  Divider,
  Descriptions,
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Select,
  TimePicker,
} from 'antd'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { bucket_url } from '../../Utils'
import GyunProductAPI from '../../api/GyunProductAPI'
import GyunLoginAPI from '../../api/GyunLoginAPI'
import { GyunPromotion, GyunReservation } from '../../api'
const { RangePicker } = DatePicker
const { Meta } = Card
const { Option } = Select
const CheckboxGroup = Checkbox.Group
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

const layout = {}
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const ReservationPresenter = (props) => {
  const { num, start, end, people } = props.props.location.state
  const [product, setProduct] = useState(null)
  const [promotion, setPromotion] = useState(null)
  const [startH, setStartH] = useState('')
  const [endH, setEndH] = useState('')
  const [credit, setCredit] = useState('')
  const [name, setName] = useState('')
  let history = useHistory()
  const handleEndTime = (e) => {
    setEndH(e.format('HH:mm'))
  }
  useEffect(() => {
    console.log(props.props.location.state)
    getProduct()
  }, [])
  const getProduct = async () => {
    await GyunLoginAPI.login()
    const response = await GyunProductAPI.getProduct(num)
    setProduct(response.data)
    const promotResponse = await GyunPromotion.getPromotionDetail(response.data.t_promotion_seq)
    console.log(promotResponse)
    setPromotion(promotResponse.data)
  }
  const handleStartTime = (e) => {
    setStartH(e.format('HH:mm'))
  }
  const handleSubmit = async () => {
    console.log(promotion.promotion_discount)
    console.log(promotion)
    const body = {
      goods_detail_seq: num,
      reservation_nm: name,
      reservation_goods_detail: product.goods_detail_nm,
      reservation_st: `${start}`,
      reservation_end: `${end}`,
      promotion_discount:
        promotion.promotion_discount == '0'
          ? promotion.promotion_discount
          : (people * product.goods_detail_price) / promotion.promotion_discount,
      promotion_discountType: 'price',
      approval_mileage: 0,
      reservation_total_price:
        promotion.promotion_discount != 0
          ? people * product.goods_detail_price -
            (people * product.goods_detail_price) / promotion.promotion_discount
          : people * product.goods_detail_price,
      approval_method: credit,
    }
    console.log(body)
    if (name == '') {
      alert('이름을 입력해주세요')
    } else if (startH == '') {
      alert('체크인 시간을 입력해주세요')
    } else if (endH == '') {
      alert('체크아웃 시간을 입력해주세요')
    } else if (credit == '') {
      alert('결제 수단을 선택하세요')
    } else {
      const response = await GyunReservation.postReservation(body)
      if (response.code == 200) {
        history.push({
          pathname: `/user/detail/${response.data.reservation_seq}`,
          state: { num: response.data.reservation_seq },
        })
      }
    }
  }
  return (
    <div style={{ width: '80%', marginLeft: '10%', marginTop: '3%', display: 'flex' }}>
      {product != null && promotion != null ? (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
            <div>
              <Card
                hoverable
                style={{ width: 300, height: '250px' }}
                cover={<img alt="example" src={`${bucket_url}/${product.goods_image_path}`} />}
              >
                <h1>굿즈이름</h1>
              </Card>
            </div>
            <div style={{ marginTop: '3%' }}>
              <Descriptions title="" bordered style={{ width: 400 }}>
                <Descriptions.Item label="체크인" span={3}>
                  {start.slice(0, 10)}
                </Descriptions.Item>
                <Descriptions.Item label="체크아웃" span={3}>
                  {end.slice(0, 10)}
                </Descriptions.Item>
                <Descriptions.Item label="굿즈이름" span={3}>
                  {product.goods_detail_nm}
                </Descriptions.Item>
                <Descriptions.Item label="여행금액" span={3}>
                  {people * product.goods_detail_price}
                </Descriptions.Item>
                <Descriptions.Item label="할인항목" span={3}>
                  {promotion.promotion_nm}
                </Descriptions.Item>
                <Descriptions.Item label="총 할인금액" span={3}>
                  {promotion.promotion_discount != 0
                    ? (people * product.goods_detail_price) / promotion.promotion_discount
                    : 0}
                </Descriptions.Item>
                <Descriptions.Item label="총금액" span={3}>
                  {promotion.promotion_discount != 0
                    ? people * product.goods_detail_price -
                      (people * product.goods_detail_price) / promotion.promotion_discount
                    : people * product.goods_detail_price}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>
          <div
            style={{
              width: '50%',
              marginLeft: '10%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Card title="구매자 정보" style={{ height: '300px' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>구매자명:</div>
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  style={{ width: '60%' }}
                ></Input>
                <div style={{ width: '20%' }}></div>
              </div>
              <Divider></Divider>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>체크인 시간:</div>
                <div style={{ width: '60%' }}>
                  <TimePicker format={'HH:mm'} onChange={(e) => handleStartTime(e)} />
                </div>
                <div style={{ width: '20%' }}></div>
              </div>
              <Divider></Divider>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>체크아웃시간:</div>
                <div style={{ width: '60%' }}>
                  <TimePicker format={'HH:mm'} onChange={(e) => handleEndTime(e)} />
                </div>
                <div style={{ width: '20%' }}></div>
              </div>
            </Card>

            <Card title="결제 정보" style={{ height: '300px' }}>
              <Form
                style={{ marginLeft: '10%' }}
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Radio.Group
                  onChange={(e) => {
                    setCredit(e.target.value)
                  }}
                  value={credit}
                >
                  <Radio style={radioStyle} value={'신용카드'}>
                    신용카드
                  </Radio>
                  <Radio style={radioStyle} value={'계좌이체'}>
                    계좌이체
                  </Radio>
                  <Radio style={radioStyle} value={'무통장입금'}>
                    무통장입금
                  </Radio>
                  <Radio style={radioStyle} value={'토스'}>
                    토스
                  </Radio>{' '}
                  <Radio style={radioStyle} value={'카카오페이'}>
                    카카오페이
                  </Radio>
                </Radio.Group>
              </Form>
            </Card>
            <Card title="약관" style={{ height: '300px' }}>
              <Form
                {...layout}
                style={{ marginLeft: '10%' }}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Checkbox onChange={onChange}>Checkbox</Checkbox>
                  <Checkbox onChange={onChange}>Checkbox</Checkbox>
                  <Checkbox onChange={onChange}>Checkbox</Checkbox>
                  <Checkbox onChange={onChange}>Checkbox</Checkbox>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
                  <Button onClick={() => {}} type="button" htmlType="submit">
                    Cancel
                  </Button>
                  <Button onClick={() => handleSubmit()} type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
ReservationPresenter.propTypes = {}
export default ReservationPresenter
