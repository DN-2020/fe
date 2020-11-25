import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import { getCookie, deleteCookie } from '../../../Utils'
const { Header } = Layout
const CompanyHeaderPresenter = (props) => {
  const { login } = props
  let history = useHistory()
  const [key, setKey] = useState(props.key)
  // const [login, setLogin] = useState(false)
  const logout = () => {
    deleteCookie('accessToken', { domain: 'localhost', path: '/' })
    deleteCookie('company', { domain: 'localhost', path: '/' })
    alert('로그아웃 되었습니다.')
    history.push('/')
  }
  // useEffect(() => {
  //   getPreData()
  // }, [login])
  // const getPreData = async () => {
  //   const cookie = await getCookie('accessToken')

  //   if (cookie != undefined) {
  //     setLogin(true)
  //   }
  // }
  const handleKey = (e) => {
    console.log(e)
    setKey(e.key)
  }
  return (
    <>
      {login ? (
        <Header>
          <Menu
            style={{ marginLeft: '90%' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Button onClick={logout}>로그아웃</Button>
          </Menu>
        </Header>
      ) : (
        <></>
      )}
    </>
  )
}

export default CompanyHeaderPresenter
