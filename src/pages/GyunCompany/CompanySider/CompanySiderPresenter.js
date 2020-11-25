import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { getCookie } from '../../../Utils'
const { SubMenu } = Menu
const { Sider, Header } = Layout
const CompanySiderContainer = (props) => {
  const { login } = props
  const [key, setKey] = useState(props.key)
  // const [login, setLogin] = useState(false);
  // useEffect(() => {
  //   if (getCookie('accessToken') != undefined) {
  //     setLogin(true);
  //   }
  // }, []);
  const handleKey = (e) => {
    console.log(e)
    setKey(e.key)
  }
  return (
    <>
      {login ? (
        <Sider>
          <div className="logo" />
          <Menu theme="dark" selectedKeys={key} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={handleKey}>
              <Link to={{ pathname: '/company/dashboard' }}>대시보드</Link>
            </Menu.Item>
            <SubMenu key="sub1" title="상품 및 예약">
              <Menu.Item key="2" value={'1'} onClick={handleKey}>
                <Link to={{ pathname: '/company/product' }}>상품관리</Link>
              </Menu.Item>
              <Menu.Item key="3" onClick={handleKey}>
                <Link to={{ pathname: '/company/reservation' }}>예약관리 </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="리뷰 및 댓글 관리">
              <Menu.Item key="5" onClick={handleKey}>
                <Link to={{ pathname: '/company/review' }}>리뷰 관리</Link>
              </Menu.Item>
            </SubMenu>
            {/**       <SubMenu key="sub3" title="고객관리">
              <Menu.Item key="6" onClick={handleKey}>
                <Link to={{ pathname: '/company/customer' }}>고객관리</Link>
              </Menu.Item>
	  </SubMenu>**/}
            <SubMenu key="sub4" title="부서관리">
              {/**<Menu.Item key="7" onClick={handleKey}>
                <Link to={{ pathname: '/company/companys' }}>회사관리</Link>
	</Menu.Item>**/}
              <Menu.Item key="8" onClick={handleKey}>
                <Link to={{ pathname: '/company/department' }}> 부서관리</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="사원관리">
              <Menu.Item key="9" onClick={handleKey}>
                <Link to={{ pathname: '/company/employee' }}>사원관리</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      ) : (
        <></>
      )}
    </>
  )
}

export default CompanySiderContainer
