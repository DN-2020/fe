import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Radio, Input } from 'antd';
import { Layout , Menu , List , Button} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const CancelPresenter = props => {

    const radioStyle = {
      marginTop : "3%",
        display: 'block',
        height: '50px',
        lineHeight: '30px',
        fontSize : "20px"
      };

      const data = [
        {id:1, value:"취소사유1취소사유1취소사유 입니다"},  {id:2, value:"취소사유2취소사유2취소사유 입니다"},
        {id:3, value:"취소사유3취소사유3취소사유 입니다"},  {id:4, value:"취소사유4취소사유4취소사유 입니다"},
        {id:5, value:"취소사유5취소사유5취소사유 입니다"}
      ];

      return (
<>
        <Layout style ={{height :"100%"}}>
        <Header>dd</Header>
        <Content style ={{ textAlign : "center" }}>
        <div style ={{   marginTop : "5%" , marginBottom : "10%"}}>
        <Radio.Group>
        <List
          size="large"
          style ={{width : 400 , height : 500 , backgroundColor : "#ffffff"}}
          header={<div style ={{fontSize : "40px" }}>취소사유</div>}
          footer={<div><Button type="primary">취소하기</Button></div>}
          bordered 
          dataSource={data}
          renderItem={item =><Radio style={radioStyle} value = {item.id}>
          {item.value}
        </Radio>}
        />
        </Radio.Group>
        </div>
        </Content>
        </Layout>
        </>
        );
};

CancelPresenter.propTypes = {
    
};

export default CancelPresenter;