import React from 'react';
import { Card, Button, Layout, Input } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

const LoginPresenter = (props) => {
  return (
    <>
      <Layout>
        <Content>
          <Card style={style.cardStyle}>
            <div style={{ textAlign: 'center', marginTop: '10%' }}>
              <Header>
                <p style={{ fontSize: 30, color: '#ffffff' }}>로그인</p>{' '}
              </Header>
              <div style={style.InputDivStyle}>
                <Input
                  placeholder="ID"
                  style={{ border: 'none', borderBottom: '1px solid' }}
                />
                <br />
                <br />
                <Input.Password
                  placeholder="password"
                  style={{ border: 'none', borderBottom: '1px solid' }}
                />
              </div>
              <Button>Login</Button>
              <Button style={style.SignUpButtonStyle}>
                <Link to="/user/register">SignUp</Link>
              </Button>
            </div>
          </Card>
        </Content>
      </Layout>
    </>
  );
};

LoginPresenter.propTypes = {};

const style = {
  cardStyle: {
    width: 500,
    height: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '20%',
  },
  InputDivStyle: {
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '20%',
    marginTop: '10%',
  },
  SignUpButtonStyle: {
    marginLeft: '10%',
  },
};
export default LoginPresenter;
