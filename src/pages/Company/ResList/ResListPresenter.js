import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';

import { Layout} from 'antd';
import {Table} from "antd"
import {useHistory} from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

const ResListPresenter =(props)=>{
    return(
        <>
            <Header style={style.headerLayout} >
              <h1>상품상세</h1>
            </Header>
            <div className="contentContainer" style={style.container}>
              
            </div>
        </>
    )
}
ResListPresenter.propTypes = {

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
export default ResListPresenter

