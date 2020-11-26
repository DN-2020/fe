import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Avatar, Input, Form, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UserInfo_Revise } from '../../../api';
import { get } from 'js-cookie';
import { ApiManager } from '../../../Utils';
import { GyunProductAPI } from '../../../api';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
//npm install react-dropzone
const $http = new ApiManager();

const { Meta } = Card;

const Modify = (props) => {
  const [name, setName] = useState(props.props.props.customer_nm);
  const [email, setEmail] = useState(props.props.props.customer_email);
  const [phonnumber, setPhonnumber] = useState(props.props.props.customer_tel);
  const [address, setAddress] = useState(props.props.props.address);
  const [detailAddress, setDetailAddress] = useState(
    props.props.props.DetailAddress
  );
  const [iamge, setImage] = useState(props.props.props.image_gg);
  console.log(props.props.props.customer_email);

  let config = {
    headers: {
      'Access-Control-Allow-Origin': true,
      Authorization: get('accessToken'),
    },
  };
  const body = {
    customer_email: email,
    customer_nm: name,
    customer_tel: phonnumber,
    customer_address: address,
    customer_detail_address: detailAddress,
    customer_post: '33245',
    customer_image_path: iamge,
  };

  const openMessage = () => {
    message.loading({ content: 'Loading...' });
    setTimeout(() => {
      message.success({ content: '수정완료!' });
    }, 1000);
  };

  const MyInfoChange = (e) => {
    Axios.post('https://api.dnlab.kr/v1/user/info', body, config).then((e) =>
      console.log(e)
    );
    openMessage();
    props.props.ChangeInfo();
  };
  const nameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const emailChange = (e) => {
    console.log(e.currentTarget.value);
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
      // setpreviewURL
    };
    reader.readAsDataURL(file);
  };
  //////////////////////////////////
  const onDrop = (files) => {
    let formData = new FormData();
    formData.append('image_path', files[0]);

    GyunProductAPI.postThumbnail(formData).then((e) => {
      console.log(e.request.response);
      setImage(e.request.response);
      setpreviewURL(e.request.response);
    });
  };
  //////////////////////////////////
  return (
    <>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: '25px',
                height: '25px',
                border: '1px solid lightgray',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              {...getRootProps()}
            >
              <UploadOutlined />
              <input {...getInputProps()} />
            </div>
          </section>
        )}
      </Dropzone>
      <Meta
        style={style.metaStyle}
        avatar={
          <Avatar
            style={style.avatar}
            src={`https://store.dnlab.kr/${iamge}`}
          />
        }
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
