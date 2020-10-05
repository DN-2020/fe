import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Card, Button, Avatar, Menu } from 'antd';
const { Meta } = Card;

const Sider = (props) => {
  return (
    <div>
      <Menu>
        <Menu.Item
          key="1"
          style={{ height: 200, width: 200, borderStyle: 'groove' }}
        >
          <Card style={{ marginTop: '5%' }}>
            <Meta
              style={{ marginLeft: '25%' }}
              avatar={
                <Avatar
                  style={{ height: 50, width: 50 }}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              }
            />
            <div style={{ marginTop: '15%' }}>
              이름 : 홍길동
              <br />
              point : 100원 <br />
              coupon : nwkd
            </div>
          </Card>
        </Menu.Item>
        <Menu.Item key="2" style={{ borderStyle: 'groove' }}>
          예약 보기
        </Menu.Item>
        <Menu.Item key="3" style={{ borderStyle: 'groove  ' }}>
          취소{' '}
        </Menu.Item>
      </Menu>
    </div>
  );
};

Sider.propTypes = {};

export default Sider;
