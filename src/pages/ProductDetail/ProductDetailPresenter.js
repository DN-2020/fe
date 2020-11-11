import React, { useState } from 'react'
import {
  Image,
  DatePicker,
  Space,
  List,
  Typography,
  Divider,
  Descriptions,
  Radio,
  Button,
  Rate,
  Card,
  Dropdown,
} from 'antd'
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
const { RangePicker } = DatePicker
const { Meta } = Card
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
]

const ProductDetailPresenter = (props) => {
  const [adult, setAdult] = useState(0)
  const [kid, setKid] = useState(0)
  const [baby, setBaby] = useState(0)
  const [dropdown, setDropdown] = useState(false)
  let history = useHistory()

  const handleReservation = (e) => {
    history.push(`/user/reservation/${e}`)
  }
  const onChange = (e) => {}
  const onOk = (e) => {}
  const handleDropdown = (e) => {
    setDropdown(!dropdown)
  }
  const handleKid = (e) => {
    if (e == '-') {
      if (kid == 0) {
      } else {
        setKid(kid - 1)
      }
    } else {
      setKid(kid + 1)
    }
  }
  const handleAdult = (e) => {
    if (e == '-') {
      if (adult == 0) {
      } else {
        setAdult(adult - 1)
      }
    } else {
      setAdult(adult + 1)
    }
  }
  const handleBaby = (e) => {
    if (e == '-') {
      if (baby == 0) {
      } else {
        setBaby(baby - 1)
      }
    } else {
      setBaby(baby + 1)
    }
  }
  const menu = (
    <div style={{ background: 'white', width: '500px' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <MinusCircleTwoTone onClick={() => handleAdult('-')} />
        성인:{adult}
        <PlusCircleTwoTone onClick={() => handleAdult('+')} />
      </div>
      <div>
        <MinusCircleTwoTone onClick={() => handleKid('-')} />
        아동:{kid}
        <PlusCircleTwoTone onClick={() => handleKid('+')} />
      </div>
      <div>
        <MinusCircleTwoTone onClick={() => handleBaby('-')} />
        유아:{baby}
        <PlusCircleTwoTone onClick={() => handleBaby('+')} />
      </div>
      <Button onClick={handleDropdown}>OK</Button>
    </div>
  )
  return (
    <div
      style={{
        width: '80%',
        marginLeft: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '2%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '70%',
            flexWrap: 'wrap',
            textAlign: 'left',
          }}
        >
          <div style={{ width: '80%', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '100%' }}>
              <h1>굿즈네임</h1>
            </div>
            <div style={{ width: '60%' }}>
              <Rate disabled defaultValue={4}></Rate>
            </div>
            <div style={{ width: '40%', flexDirection: 'flex-end' }}>
              <p>450,000원</p>
            </div>
          </div>
          <div style={{ width: '80%', marginTop: '1%' }}>
            <Image
              width={800}
              src="https://image.tport.io/gds_properties/56620/7fa08d41-65c5-4093-91cb-ffd9308f5733-1000.jpg"
            />
          </div>
          <div style={{ width: '80%' }}>
            <Image
              width={800}
              src="https://image.tport.io/gds_properties/56620/610d55df-fb6f-49a6-a615-a89c620ac334-1000.jpg"
            />
          </div>
          <div style={{ width: '80%' }}>
            <Image
              width={800}
              src="https://image.tport.io/gds_properties/56620/67f724d8-83e2-4328-b473-537922c40680-1000.jpg"
            />
          </div>
          <div style={{ width: '80%' }}>
            <Image
              width={800}
              src="https://image.tport.io/gds_properties/56620/c6d77931-7bce-4220-9da2-2c03c3fcb5f0-1000.jpg"
            />
          </div>
          <div style={{ width: '80%' }}>
            <Image
              width={800}
              src="https://image.tport.io/gds_properties/56620/c6d77931-7bce-4220-9da2-2c03c3fcb5f0-1000.jpg"
            />
          </div>
        </div>
        <div
          style={{
            width: '20%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <Card bordered style={{ width: '100%', margin: 0 }} title="업체이름">
              <Meta style={{ textAlign: 'center' }} description={'업체이름'} />
            </Card>
          </div>
          <div>
            <Card
              bordered
              style={{ width: '100%', height: '150px', marginTop: '3%' }}
              title="대여기간"
            >
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
              />
            </Card>
          </div>
          <div>
            <Card
              bordered
              style={{ width: '100%', height: '250px', marginTop: '3%' }}
              title="인원수"
            >
              <Dropdown
                trigger={'click'}
                visible={dropdown}
                onVisibleChange={handleDropdown}
                overlay={menu}
              >
                <Button>인원</Button>
              </Dropdown>
              <p>성인:{adult}</p>
              <p>아동:{kid}</p>
              <p>유아:{baby}</p>
              <p style={{ borderTop: '0.1px solid lightgray' }}>총원:{adult + kid + baby}</p>
            </Card>
          </div>
          <div>
            <Card title="예약하기" style={{ marginTop: '3%', height: '150px' }}>
              <div>가격:{(adult + kid + baby) * 450000}</div>
              <Button onClick={() => history.push('/user/reservation/1')}>예약하기</Button>
            </Card>
          </div>
        </div>
      </div>
      <h2>Review</h2>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a>{item}</a>
          </List.Item>
        )}
      />{' '}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

ProductDetailPresenter.propTypes = {}

export default ProductDetailPresenter