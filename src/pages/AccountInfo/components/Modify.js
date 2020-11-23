import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Avatar, Input, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UserInfo_Revise } from '../../../api';
import { get } from 'js-cookie';
import { ApiManager } from '../../../Utils';
import Axios from 'axios';

const $http = new ApiManager();

const { Meta } = Card;

const Modify = (props) => {
  console.log(props);
  const [name, setName] = useState(props.props.props.customer_nm);
  const [email, setEmail] = useState(props.props.props.customer_email);
  const [phonnumber, setPhonnumber] = useState(props.props.props.customer_tel);
  const [address, setAddress] = useState(props.props.props.address);
  const [detailAddress, setDetailAddress] = useState(
    props.props.props.DetailAddress
  );

  let config = {
    headers: {
      'Access-Control-Allow-Origin': true,
      // 'Set-Cookie': Axios.defaults.headers.common['Set-Cookie'],
      Authorization: get('accessToken'),
    },
  };
  const body = [
    { customer_email: email },
    { customer_nm: name },
    { customer_tel: phonnumber },
    { customer_address: address },
    { customer_detail_address: detailAddress },
    { customer_post: '33245' },
  ];
  const MyInfoChange = (e) => {
    console.log(name);
    console.log(email);
    console.log(phonnumber);
    console.log(address);
    console.log(detailAddress);
    UserInfo_Revise.UserRevise().then((e) => console.log(e));
    // UserInfo_Revise.UserRevise(
    //   'https://api.dnlab.kr/v1/user/info',
    //   body
    // ).then((e) => console.log(e));
    // Axios.put('https://api.dnlab.kr/v1/user/info', body, config).then((e) =>
    //   console.log(e)
    // );
    //   $http
    //     .put('https://api.dnlab.kr/v1/user/info', body)
    //     .then((e) => console.log(e));
  };
  const nameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const emailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const phonenumChange = (e) => {
    setPhonnumber(e.currentTarget.value);
  };
  const AddressChange = (e) => {
    setAddress(e.currentTarget.value);
  };
  const DetailAddressChange = (e) => {
    setDetailAddress(e.currentTarget.value);
  };
  const [file, setFIle] = useState();
  const [previewURL, setpreviewURL] = useState(
    'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  );

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setFIle(file);
      setpreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <input
        type="file"
        icon={<UploadOutlined />}
        onChange={handleFileOnChange}
      ></input>
      <Meta
        style={style.metaStyle}
        avatar={<Avatar style={style.avatar} src={previewURL} />}
      />
      <br />
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 15,
        }}
        layout="horizontal"
      >
        <Form.Item label="이름">
          <Input
            type="text"
            style={style.nameInput}
            value={name}
            onChange={nameChange}
          ></Input>
        </Form.Item>
        <Form.Item label="이메일">
          <Input
            type="email"
            style={style.emailInput}
            value={email}
            onChange={emailChange}
          ></Input>
        </Form.Item>
        <Form.Item label="번호">
          <Input
            type="phonnumber"
            style={style.phonenumInput}
            value={phonnumber}
            onChange={phonenumChange}
          ></Input>
        </Form.Item>
        <Form.Item label="주소">
          <Input
            type="text"
            style={style.address}
            value={address}
            onChange={AddressChange}
          ></Input>
        </Form.Item>
        <Form.Item label="상세주소">
          <Input
            type="text"
            style={style.detailaddress}
            value={detailAddress}
            onChange={DetailAddressChange}
          ></Input>
        </Form.Item>
        <Button onClick={MyInfoChange}>수정하기</Button>
        <Button style={style.buttonStyle} onClick={props.props.ChangeInfo}>
          취소하기
        </Button>
      </Form>
    </>
  );
};

Modify.propTypes = {};

const style = {
  metaStyle: {
    marginLeft: '30%',
  },
  nameInput: {
    marginLeft: '7%',
  },
  emailInput: {
    marginLeft: '5%',
  },
  phonenumInput: {
    marginLeft: '3%',
  },
  address: {
    marginLeft: '3%',
  },
  detailaddress: {
    marginLeft: '3%',
  },
  avatar: {
    height: 150,
    width: 150,
  },
  divStyle: {
    marginTop: '15%',
    marginLeft: '20%',
  },
  buttonStyle: {
    // marginLeft: '20%',
  },
};

export default Modify;
