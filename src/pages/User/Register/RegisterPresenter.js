import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Layout, Input } from 'antd';
import PropTypes from 'prop-types';
import { NodeExpandOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
/*
npm install --save @ant-design/icons
*/

const RegisterPresenter = (props) => {
  return (
    <>
      <Layout>
        <Content>
          <Card style={style.cardStyle}>
            <Header>
              <p style={style.Pstyle}>회원가입</p>
            </Header>
            <div style={style.DivStyle}>
              <Input
                style={style.InputStyle}
                placeholder="UserName"
                prefix={<UserOutlined />}
              />
              <br />
              <br />
              <Input
                style={style.InputStyle}
                placeholder="Id"
                prefix={<UserOutlined />}
              />
              <br />
              <br />
              <Input.Password placeholder="pwd" style={style.InputStyle} />
              <br />
              <br />
              <Input placeholder="address" style={style.InputStyle} />
              <br />
              <br />
              <Input placeholder="Phone" style={style.InputStyle} />
              <br />
              <br />
              <Input
                placeholder="Email"
                type="email"
                style={style.InputStyle}
              />
              <br />
              <br />
            </div>
            <Button>SignUp</Button>
            <Button style={style.CancelStyle}>
              <Link to="/user/login">Cancel</Link>
            </Button>
          </Card>
        </Content>
      </Layout>
    </>
  );
};

RegisterPresenter.propTypes = {};

const style = {
  Pstyle: {
    fontSize: 30,
    color: '#ffffff',
  },
  cardStyle: {
    width: 500,
    height: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    marginBottom: '10%',
    textAlign: 'center',
  },
  InputStyle: {
    border: 'none',
    borderBottom: '1px solid',
  },
  DivStyle: {
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '10%',
    marginTop: '10%',
  },
  CancelStyle: {
    marginLeft: '15%',
  },
};

export default RegisterPresenter;
