import React from 'react';
import PropTypes from 'prop-types';
import {Card , Button ,Avatar } from 'antd';

const { Meta } = Card;



const test = props => {
    return (
        <>
      <Meta style ={{marginLeft : "35%"}}
              avatar={
                <Avatar style={{height:150 , width:150}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }/>
            <div style = {{marginTop : "15%" , marginLeft : "20%"}}>
            이름 : 홍길동<br/><br/>
            email : hong12@naver.com <br/><br/>
            연락처 : 010-0000-0000
            </div>
      </>
    );
};

test.propTypes = {
    
};

export default test;