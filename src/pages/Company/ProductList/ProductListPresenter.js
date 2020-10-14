import React from 'react'
import PropTypes from 'prop-types'
import { Layout,Button } from 'antd';
import {Table} from "antd"
import {useHistory} from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;


const ProductListPresenter=(props)=> {
  let history=useHistory();
  const handleRow=(data)=>{
    history.push(`/company/product/${data.seq}`);
  }
  const column=[{
    title:"번호",
    key:"seq",
    dataIndex:"seq",
    render:text=><div>{text}</div>
  },{
    title:"썸네일",
    key:"thumbnail",
    dataIndex:"thumbnail",
    render:img=><img src={`${img}`}></img>
  },{
    title:"상품명",
    key:"name",
    dataIndex:"name",
    render:text=><div>{text}</div>
  },{
    title:"전화번호",
    key:"tel",
    dataIndex:"tel",
    render:text=><div>{text}</div>
  },{
    title:"가격",
    key:"price",
    dataIndex:"price",
    render:text=><div>{text}</div>
  },{
    title:"주소",
    key:"address",
    dataIndex:"address",
    render:text=><div>{text}</div>
  }];
  const data=[{key:"1",seq:"1",thumnail:"/logo192.png",name:"상품명1",tel:"010-0000-0000",price:"25000",address:"부산광역시 부산진구"},{key:"2",seq:"1",thumnail:"/logo192.png",name:"상품명1",tel:"010-0000-0000",price:"25000",address:"부산광역시 부산진구"}]
    return (
        <>
      <Header style={style.headerLayout} >
           <h1>상품관리</h1>
      </Header>
      <Content style={style.contentLayout}>
        <div style={{display:"flex",justifyContent:"flex-end", flexWrap:"wrap"}}>
          <Button onClick={()=>history.push("/company/new/product")}>상품등록</Button>
        </div>
        <Table onRow={(record,rowIndex)=>{return{onClick:(e)=>handleRow(record,rowIndex)}}} columns={column} dataSource={data}></Table>
      </Content>            
        </>
    )
}

ProductListPresenter.propTypes = {

}
const style={
  headerLayout:{
    background:"#fff",
    textAlign:"left"
  },
  contentLayout:{
    background:"white", padding: 24, minHeight: 360, marginTop: "10px"
  },
  
}
export default ProductListPresenter

