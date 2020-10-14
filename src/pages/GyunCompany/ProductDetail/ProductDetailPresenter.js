import React from 'react'
import PropTypes from 'prop-types'
import { Layout,Button } from 'antd';
import {Table} from "antd"
import {useHistory} from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const data={
  seq:"1",
  category:"1",
  name:"상품명1",
  tel:"010-0000-0000",
  post:"1234",
  address:"주소",
  addressDetail:"상세주소",
  price:"100000",
  promotion:"seq"
}
const ProductDetailPresenter=(props)=> {
  let history=useHistory();
  const goProduct=()=>{
    history.push(`/company/product`);
  }
 const goUpdate=()=>{
   history.push(`/company/product/update/${data.seq}`)
 }
    return (
        <>
      <Header style={style.headerLayout} >
           <h1>상품상세</h1>
      </Header>
        <div className="contentContainer" style={style.container}>
          <div classNmae="imageContainer" style={{...style.contentLayout,width:"49%",fontSize:"20px"}}>
            <h3>이미지</h3>
            <img src="logo192.png" alt={"thumnail"}></img>
          </div>
          <div className="infomationContainer" style={{...style.contentLayout,...style.infomationContainer}}>
          <div>
            <h3>상품 정보</h3>
          </div>
          <div style={style.itemContainer}>카테고리:{data.category}</div>
          <div style={style.itemContainer}>
            상품명:{data.name}
          </div>
          <div style={style.itemContainer}>
            전화번호:{data.tel}
          </div>
          <div style={style.itemContainer}>
            우편번호:{data.post}
          </div>
          <div style={style.itemContainer}>
            주소:{data.address}
          </div>
          <div style={style.itemContainer}>
            주소상세:{data.addressDetail}
          </div>
          <div style={style.itemContainer}>
            가격:{data.price}원
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
                111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
              </div>
              <div >
                <Button onClick={goUpdate}>수정</Button> <Button onClick={goProduct}>취소</Button>
              </div>
          </div>
      </div>
        </>
    )
}

ProductDetailPresenter.propTypes = {

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
export default ProductDetailPresenter

