import React, { useState } from 'react'
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
} from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useStore } from 'react-redux'
import { useHistory } from 'react-router-dom'
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

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
]
const ReservationPresenter = (props) => {
  const [values, setValue] = useState({
    values: 1,
  })

  const onFinish = (values) => {
    console.log(values)
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const onChange2 = (e) => {
    console.log('radio checked', e.target.value)

    setValue({ value: e.target.value })
  }
  const onChange3 = (value) => {
    console.log(`selected ${value}`)
  }

  const onBlur = () => {
    console.log('blur')
  }

  const onFocus = () => {
    console.log('focus')
  }
  let hiotory = useHistory()
  const onSearch = (val) => {
    console.log('search:', val)
  }
  const handleSubmit = (data) => {
    hiotory.push('/user/detail/1')
  }
  return (
    <div style={{ width: '80%', marginLeft: '10%', marginTop: '3%', display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
        <div>
          <Card
            hoverable
            style={{ width: 300, height: '250px' }}
            cover={
              <img
                alt="example"
                src="https://image.tport.io/gds_properties/56620/7fa08d41-65c5-4093-91cb-ffd9308f5733-1000.jpg"
              />
            }
          >
            <h1>굿즈이름</h1>
          </Card>
        </div>
        <div style={{ marginTop: '3%' }}>
          <Descriptions title="" bordered style={{ width: 400 }}>
            <Descriptions.Item label="체크인" span={3}>
              체크인
            </Descriptions.Item>
            <Descriptions.Item label="체크아웃" span={3}>
              체크아웃
            </Descriptions.Item>
            <Descriptions.Item label="굿즈이름" span={3}>
              굿즈이름
            </Descriptions.Item>
            <Descriptions.Item label="여행금액" span={3}>
              여행금액
            </Descriptions.Item>
            <Descriptions.Item label="할인항목" span={3}>
              할인항목
            </Descriptions.Item>
            <Descriptions.Item label="총 할인금액" span={3}>
              총 할인금액
            </Descriptions.Item>
            <Descriptions.Item label="총금액" span={3}>
              총금액
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
        <Card title="구매자 정보" style={{ height: '400px' }}>
          <Form
            {...layout}
            style={{ marginLeft: '10%' }}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['user', 'name']}
              label="info1"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="info2"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'age']}
              label="info3"
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
              <Input />
            </Form.Item>
          </Form>
        </Card>
        <Card title="예약정보" style={{ height: '300px' }}>
          <Form
            style={{ marginLeft: '10%' }}
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['user', 'name']}
              label="info1"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Select
              showSearch
              placeholder="Select 1"
              optionFilterProp="children"
              onChange={onChange3}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
            <br />
            <br />
            <Select
              showSearch
              placeholder="Select 2"
              optionFilterProp="children"
              onChange={onChange3}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form>
        </Card>
        <Card title="결제 정보" style={{ height: '300px' }}>
          <Form
            style={{ marginLeft: '10%' }}
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Radio.Group onChange={onChange2} value={values.value}>
              <Radio style={radioStyle} value={1}>
                Option A
              </Radio>
              <Radio style={radioStyle} value={2}>
                Option B
              </Radio>
              <Radio style={radioStyle} value={3}>
                Option C
              </Radio>
              <Radio style={radioStyle} value={4}>
                Option D
              </Radio>{' '}
              <Radio style={radioStyle} value={5}>
                Option E
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
    </div>
  )
}

ReservationPresenter.propTypes = {}

export default ReservationPresenter
