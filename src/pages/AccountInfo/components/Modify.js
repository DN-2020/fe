import React from 'react';
import PropTypes from 'prop-types';
import {Card , Button ,Avatar } from 'antd';
import Search from './Search'
import { Redirect } from 'react-router-dom';
const { Meta } = Card;

const Modify = ({props}) => {



    return (
        <>
        <Meta style ={{marginLeft : "35%"}}
        avatar={
          <Avatar style={{height:150 , width:150}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }/>
      <div style = {{marginTop : "15%" , marginLeft : "20%"}}>
이름    <input type = "text" style = {{marginLeft : "7%"}}></input><br/><br/>
email <input type = "email" style = {{marginLeft : "5%"}}></input><br/><br/>
연락처   <input type = "phonnumber" style = {{marginLeft : "3%"}}></input>
      <br/><br/><br/>
      <Button>수정하기</Button>
      <Button style ={{marginLeft : "20%"}} onClick = {props}  >취소하기</Button>
      
      </div>
        </>
    );
};

Modify.propTypes = {
    
};

export default Modify;