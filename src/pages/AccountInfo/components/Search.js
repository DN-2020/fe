import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Avatar, Form } from 'antd';

const { Meta } = Card;

const test = (props) => {
  console.log(props.data.customer_email);
  console.log(props.data.customer_nm);

  return (
    <>
      <Meta
        style={{ marginLeft: '35%' }}
        avatar={
          <Avatar
            style={{ height: 150, width: 150 }}
            // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            src={`https://store.dnlab.kr/${props.data.image_gg}`}
          />
        }
      />
      <div style={{ marginTop: '15%' }}>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 13,
          }}
          layout="horizontal"
        >
          <Form.Item label="이름">{props.data.customer_nm}</Form.Item>
          <Form.Item label="이메일">{props.data.customer_email}</Form.Item>
          <Form.Item label="전화번호">{props.data.customer_tel}</Form.Item>
          <Form.Item label="주소">{props.data.address}</Form.Item>
          <Form.Item label="상세주소">{props.data.DetailAddress}</Form.Item>
        </Form>
      </div>
    </>
  );
};

test.propTypes = {};

export default test;
