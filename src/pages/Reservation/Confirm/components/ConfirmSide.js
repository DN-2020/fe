import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const ConfirmSide = (props) => {
  return (
    <div>
      <Menu style={{ borderStyle: 'groove  ' }}>
        <Menu.Item key="1">
          <Link to="/reservation/confirm">예약 보기</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/reservation/confirm/cancel">취소 내역</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

ConfirmSide.propTypes = {};

export default ConfirmSide;
