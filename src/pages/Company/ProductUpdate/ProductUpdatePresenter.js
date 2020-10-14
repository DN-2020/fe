import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';

import { Layout,Button,Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Upload,
  Rate,
  Checkbox,
  Row,
  Input,
  TextArea,
  Col, } from 'antd';
import {Table} from "antd"
import {useHistory} from "react-router-dom";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import PostCodeInput from '../../../component/PostCodeInput';
const { Header, Footer, Sider, Content } = Layout;

const ProductUpdatePresenter=(props)=> {
  const [data,setData]= useState({ seq:"1",
category:"1",
name:"상품명1",
tel:"010-0000-0000",
post:"1234",
address:"주소",
addressDetail:"상세주소",
price:"100000",
promotion:"seq"})
  let history=useHistory();
 const updateProduct=()=>{
   history.push(`/company/product/${data.seq}`)
 }
 const cancelProoduct=()=>{
  history.push(`/company/product/${data.seq}`)
 }
 const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const handlePost=(e)=>{
  let temp=Object.assign(data);
  temp.address=e.address;
  temp.post=e.zonecode;
  console.log(temp);
  setData(temp);
  
}
const handleData=(title,value)=>{

}

    return (
        <>
      <Header style={style.headerLayout} >
           <h1>상품상세</h1>
      </Header>
        <div className="contentContainer" style={style.container}>
          <div classNmae="imageContainer" style={{...style.contentLayout,width:"49%",fontSize:"20px"}}>
          
          <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
          </div>
          <div className="infomationContainer" style={{...style.contentLayout,...style.infomationContainer}}>
          <div>
            <h3>상품 정보</h3>
          </div>
          <div style={style.itemContainer}>카테고리:{data.category}</div>
          <div style={style.itemContainer}>
            상품명:<Input value={data.name}></Input>
          </div>
          <div style={style.itemContainer}>
            전화번호:<Input value={data.tel}></Input>
          </div>
          <div style={style.itemContainer}>
            우편번호:<Input value={data.post}></Input><PostCodeInput onChange={handlePost}/>
          </div>
          <div style={style.itemContainer}>
            주소:<Input value={data.address} ></Input>
          </div>
          <div style={style.itemContainer}>
            주소상세:<Input value={data.addressDetail}/>
          </div>
          <div style={style.itemContainer}>
            가격:<Input value={data.price}/>원
          </div>
          <div style={style.itemContainer}>
            프로모션:{data.promotion}
          </div>
          </div>
          <div className="explainContainer" style={{...style.contentLayout,width:"100%"}}>
              <div style={style.explainTitle}>
                <h3>내용</h3>
              </div>
              <div style={style.explainContent}>
                <Form.Item>
                  <Input.TextArea style={{height:"500px"}}></Input.TextArea>
                </Form.Item>
              </div>
              <div >
                <Button onClick={updateProduct}>수정</Button> <Button onClick={cancelProoduct}>취소</Button>
              </div>
          </div>
      </div>
        </>
    )
}


ProductUpdatePresenter.propTypes = {

}
const style={
  headerLayout:{
    background:"#fff",
    textAlign:"left"
  },
  infomationContainer:{
    fontSize:"20px",
    textAlign:"left",
    width:"49%"
  },
  contentLayout:{
    background:"white", padding: 24, minHeight: 360, marginTop: "10px" ,marginLeft:"1%"
  },
  container:{
    display:"flex",
    justifyContent:"flex-start",
    flexWrap:"wrap"
  },
  itemContainer:{
    borderTop:"1px solid #ebebeb",margin:"5px",padding:"5px"
  },
  imageContainer:{
    
  },
  explainContent:{
    height:"80%"
  },
  explainTitle:{
    height:"10%"
  }
}
export default ProductUpdatePresenter

