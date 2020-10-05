import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Avatar } from 'antd';

const { Meta } = Card;

const Modify = ({ props }) => {
  const [name, setName] = useState(props.data.name);
  const [email, setEmail] = useState(props.data.email);
  const [phonnumber, setPhonnumber] = useState(props.data.phonenum);

  const nameChange = (e) => {
    setName(e.currentTarget.value);
  };

  const emailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const phonenumChange = (e) => {
    setPhonnumber(e.currentTarget.value);
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
      <input type="file" onChange={handleFileOnChange}></input>
      <Meta
        style={style.metaStyle}
        avatar={<Avatar style={style.avatar} src={previewURL} />}
      />
      <div style={style.divStyle}>
        이름{' '}
        <input
          type="text"
          style={style.nameInput}
          value={name}
          onChange={nameChange}
        ></input>
        <br />
        <br />
        email{' '}
        <input
          type="email"
          style={style.emailInput}
          value={email}
          onChange={emailChange}
        ></input>
        <br />
        <br />
        연락처{' '}
        <input
          type="phonnumber"
          style={style.phonenumInput}
          value={phonnumber}
          onChange={phonenumChange}
        ></input>
        <br />
        <br />
        <br />
        <Button>수정하기</Button>
        <Button style={style.buttonStyle} onClick={props.ChangeInfo}>
          취소하기
        </Button>
      </div>
    </>
  );
};

Modify.propTypes = {};

const style = {
  metaStyle: {
    marginLeft: '35%',
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
  avatar: {
    height: 150,
    width: 150,
  },
  divStyle: {
    marginTop: '15%',
    marginLeft: '20%',
  },
  buttonStyle: {
    marginLeft: '20%',
  },
};

export default Modify;
