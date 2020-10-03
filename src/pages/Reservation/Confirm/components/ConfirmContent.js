import React from 'react';
import PropTypes from 'prop-types';
import { Space, Button } from 'antd';
import { Layout , Menu , Avatar,List} from 'antd';
import {RightSquareOutlined} from '@ant-design/icons'

/*
npm install --save @ant-design/icons
*/ 
const ConfirmContent = props => {
    return (
        <div>
        <List
        bordered
        style ={{marginLeft : "20%" , marginRight : "20%" ,marginTop: "10%"}}>
        <List.Item        
        actions={[
          <RightSquareOutlined />,
        ]}> 
           
        <List.Item.Meta
            description={<p><h style = {{fontSize : 40}}>굿즈 디테일 네임</h> <br/> 체크인 : 2020-08-07<br/>체크아웃 : 2020-08-08 <br/>이름: 홍길동<br/> 결제금액 : 30,000</p>}
          />
        </List.Item>
        </List>
        </div>
    );
};

ConfirmContent.propTypes = {
    
};

export default ConfirmContent;