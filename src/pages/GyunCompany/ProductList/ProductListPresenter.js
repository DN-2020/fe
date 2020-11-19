import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'
import { Table } from 'antd'
import { useHistory } from 'react-router-dom'
import GyunLoginAPI from '../../../api/GyunLoginAPI'
import { GyunProductAPI } from '../../../api'
import { bucket_url, getCookie } from '../../../Utils'
const { Header, Footer, Sider, Content } = Layout

const ProductListPresenter = (props) => {
  const [data, setData] = useState([])
  let history = useHistory()
  useEffect(() => {
    getUser()
    getData()
  }, [])
  const getUser = async () => {
    await GyunLoginAPI.empLogin()
  }
  const getData = async () => {
    const datas = await GyunProductAPI.getProductList()
    setData(datas.data)
  }
  const handleRow = (data) => {
    console.log(data)
    history.push(`/company/product/${data.goods_detail_seq}`)
  }
  const column = [
    {
      title: '썸네일',
      key: 'goods_detail_seq',
      dataIndex: `goods_image_path`,
      render: (img) => (
        <img style={{ width: '100px', height: 'auto' }} src={`${bucket_url}/${img}`}></img>
      ),
    },
    {
      title: '상품명',
      key: 'goods_detail_seq',
      dataIndex: 'goods_detail_nm',
      render: (text) => <div>{text}</div>,
    },
    {
      title: '전화번호',
      key: 'goods_detail_seq',
      dataIndex: 'goods_detail_tel',
      render: (text) => <div>{text}</div>,
    },
    {
      title: '가격',
      key: 'goods_detail_seq',
      dataIndex: 'goods_detail_price',
      render: (text) => <div>{text}</div>,
    },
    {
      title: '주소',
      key: 'goods_detail_seq',
      dataIndex: 'goods_address',
      render: (text) => <div>{text}</div>,
    },
  ]

  return (
    <>
      <Header style={style.headerLayout}>
        <h1>상품관리</h1>
      </Header>
      <Content style={style.contentLayout}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <Button onClick={() => history.push('/company/new/product')}>상품등록</Button>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return { onClick: (e) => handleRow(record, rowIndex) }
          }}
          columns={column}
          dataSource={data}
        ></Table>
      </Content>
    </>
  )
}

ProductListPresenter.propTypes = {}
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  contentLayout: {
    background: 'white',
    padding: 24,
    minHeight: 360,
    marginTop: '10px',
  },
}
export default ProductListPresenter
