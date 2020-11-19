import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'
import { Table } from 'antd'
import { useHistory } from 'react-router-dom'
import { GyunProductAPI } from '../../../api'
import GyunCategoryAPI from '../../../api/GyunCategoryAPI'
import GyunPromotionAPI from '../../../api/GyunPromotionAPI'
import ReactHtmlParser from 'react-html-parser'
import { bucket_url } from '../../../Utils'

const { Header, Footer, Sider, Content } = Layout

const ProductDetailPresenter = (props) => {
  const [data, setData] = useState({})
  const [category, setCategory] = useState([])
  const [promotion, setPromotion] = useState([])
  let history = useHistory()
  useEffect(() => {
    const { num } = props.props.match.params
    getProduct(num)
    getCategory()
    getPromotion()
  }, [])
  const getProduct = async (num) => {
    const response = await GyunProductAPI.getProduct(num)
    setData(response.data)
  }
  const getCategory = async () => {
    const resCategory = await GyunCategoryAPI.getCategory()
    setCategory(resCategory.data)
  }
  const getPromotion = async () => {
    const resPromotion = await GyunPromotionAPI.getPromotion()
    setPromotion(resPromotion.data)
  }
  const goProduct = () => {
    history.push(`/company/product`)
  }
  const goUpdate = () => {
    history.push(`/company/product/update/${data.goods_detail_seq}`)
  }

  return (
    <>
      <Header style={style.headerLayout}>
        <h1>상품상세</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <div
          classNmae="imageContainer"
          style={{ ...style.contentLayout, width: '49%', fontSize: '20px' }}
        >
          <h3>썸네일</h3>
          <img
            src={`${bucket_url}/${data.goods_image_path}`}
            style={{ width: '300px' }}
            alt={'thumnail'}
          ></img>
        </div>
        <div
          className="infomationContainer"
          style={{ ...style.contentLayout, ...style.infomationContainer }}
        >
          <div>
            <h3>상품 정보</h3>
          </div>
          <div style={style.itemContainer}>
            카테고리:
            {category.length > 0
              ? category.map((value) => {
                  if (data.t_goods_type_seq == value.type_seq) {
                    return value.type_nm
                  }
                })
              : '1'}
          </div>
          <div style={style.itemContainer}>상품명:{data.goods_detail_nm}</div>
          <div style={style.itemContainer}>전화번호:{data.goods_detail_tel}</div>
          <div style={style.itemContainer}>우편번호:{data.goods_post}</div>
          <div style={style.itemContainer}>주소:{data.goods_address}</div>
          <div style={style.itemContainer}>주소상세:{data.goods_detail_address}</div>
          <div style={style.itemContainer}>가격:{data.goods_detail_price}원</div>
          <div style={style.itemContainer}>
            프로모션:
            {promotion.length > 0
              ? promotion.map((value) => {
                  if (value.promotion_seq == data.t_promotion_seq) {
                    return value.promotion_nm
                  }
                })
              : 'x'}
          </div>
          <div style={style.itemContainer}>양:{data.goods_detail_amount}</div>
        </div>
        <div className="explainContainer" style={{ ...style.contentLayout, width: '100%' }}>
          <div style={style.explainTitle}>
            <h3>내용</h3>
          </div>
          <div style={style.explainContent}>{ReactHtmlParser(data.goods_detail_expression)}</div>
          <div>
            <Button onClick={goUpdate}>수정</Button> <Button onClick={goProduct}>취소</Button>
          </div>
        </div>
      </div>
    </>
  )
}

ProductDetailPresenter.propTypes = {}
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
export default ProductDetailPresenter
