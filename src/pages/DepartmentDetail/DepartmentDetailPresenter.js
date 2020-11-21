import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'
import { Table } from 'antd'
import { useHistory } from 'react-router-dom'


import DeptDetail_Search from '../../api/DeptDetail_Search'
import ReactHtmlParser from 'react-html-parser'
import { bucket_url } from '../../Utils'

const { Header, Footer, Sider, Content } = Layout

const DepartmentDetailPresenter = (props) => {
  const [data, setData] = useState({})
  const [category, setCategory] = useState([])
  const [promotion, setPromotion] = useState([])
  let history = useHistory()
  useEffect(() => {
    const { num } = props.props.match.params
    getEmp(num)
    console.log(num)
   
  }, [])
  const getEmp = async (num) => {
    const response = await DeptDetail_Search.deptdetail_search(num)
    setData(response.data)
  }

  return (
    <>
      <Header style={style.headerLayout}>
        <h1>부서상세</h1>
      </Header>
      <div>
        <div className="explainContainer" style={{ ...style.contentLayout, width: '100%' }}>
          <div style={style.explainTitle}>
           
          </div>
         <ul style={{listStyle:'none', marginLeft:-500}}>
            <li>부서번호 : {data.dept_seq}</li><br/>
            <li>부서명 : {data.dept_nm}</li><br/>
            <li>부서 매니저 : {data.dept_manager}</li>
         </ul>
          
        </div>
      </div>
    </>
  )
}

DepartmentDetailPresenter.propTypes = {}
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  infomationContainer: {
    fontSize: '20px',
    textAlign: 'left',
    width: '49%',
  },
  contentLayout: {
    background: 'white',
    padding: 24,
    minHeight: 360,
    marginTop: '10px',
    marginLeft: '1%',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  itemContainer: {
    borderTop: '1px solid #ebebeb',
    margin: '5px',
    padding: '5px',
  },
  imageContainer: {},
  explainContent: {
    height: '80%',
  },
  explainTitle: {
    height: '10%',
  },
}
export default DepartmentDetailPresenter
