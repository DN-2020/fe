import React from 'react';
import PropTypes from 'prop-types';
import { Menu} from 'antd';

const ConfirmSide = props => {
    return (
        <div>
        <Menu  style={{borderStyle : "groove  "}}>        
        <Menu.Item key="1">예약 보기</Menu.Item>
        <Menu.Item key="2">취소 </Menu.Item>
      </Menu>
        </div>
    );
};

ConfirmSide.propTypes = {
    
};

export default ConfirmSide;