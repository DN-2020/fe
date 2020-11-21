import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GyunProductAPI from '../../api/GyunProductAPI'
import { Card, Rate } from 'antd'
import Search_Modal from './component/Search_Modal'
import { bucket_url } from '../../Utils'
import { useHistory } from 'react-router-dom'
const { Meta } = Card

const Search_Body = (props) => {
  let history = useHistory()
  const [data, setData] = useState([])
  const [price, setPrice] = useState([0, 100])
  const [location, setLocation] = useState('')
  const [rate, setRate] = useState(0)
  const [product, setProduct] = useState([])
  const [filterData, setFilterData] = useState([])
  const [category, setCategory] = useState('')
  const [key, setKey] = useState('')
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({})
  const [filterCat, setFilterCat] = useState('')
  useEffect(() => {
    const search = props.props.props.location.search.split('=')
    if (search[0] == '?category') {
      getCategoryData(search[1])
      setCategory(search[1])
    } else {
      setKey(search[1])
      getSearch(search[1])
    }
  }, [])
  const getCategoryData = async (category) => {
    const response = await GyunProductAPI.getProductCat(category)
    setProduct(response.data)
    setData(response.data)
  }
  const getSearch = async (key) => {
    const response = await GyunProductAPI.getSearch(key)
    setProduct(response.data)
    setData(response.data)
  }
  const onOK = (data, keyword) => {
    setModal(!modal)
    filtering(data, keyword)
  }

  const onCancle = () => {
    setModal(!modal)
  }
  const filtering = (data, keyword) => {
    switch (keyword) {
      case 'price':
        setPrice(data)
        break
      case 'rate':
        setRate(data)
        break
      case 'location':
        setLocation(data)
        break
    }

    const filter = product.filter((value, key) => {
      if (
        value.goods_grade >= rate &&
        value.goods_address.indexOf(location) != -1 &&
        value.goods_detail_price >= price[0] * 10000 &&
        value.goods_detail_price <= price[1] * 10000
      ) {
        return value
      }
    })
    setData(filter)
  }
  const goDetail = (e) => {
    history.push(`/user/productDetail/${e}`)
  }
  return (
    <div
      className="search_body_container"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: '10%',
        marginTop: '3%',
        width: '80%',
      }}
    >
      <h2 style={{ textAlign: 'left' }}>
        {category.length > 0 ? `카테고리:${category}` : `검색어:${key}`}
      </h2>
      <div className="search_body_nav" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div
          className="search_option_price search_btn"
          style={{ background: '#008CBA', color: 'white', width: '8%', border: '1px solid white' }}
          onClick={() => {
            setFilterCat('price')
            setModal(!modal)
            console.log(!modal)
          }}
        >
          금액
        </div>
        <div
          className="search_option_rate search_btn"
          style={{ background: '#008CBA', color: 'white', width: '8%', border: '1px solid white' }}
          onClick={() => {
            setFilterCat('rate')
            setModal(!modal)
            console.log(!modal)
          }}
        >
          평점
        </div>
        <div
          className="search_option_location search_btn"
          style={{ background: '#008CBA', color: 'white', width: '8%', border: '1px solid white' }}
          onClick={() => {
            setFilterCat('location')
            setModal(!modal)
            console.log(!modal)
          }}
        >
          여행지
        </div>
        <div
          className="filter_reset search_btn"
          style={{ background: '#008CBA', color: 'white', width: '8%', border: '1px solid white' }}
          onClick={() => {
            setFilter({})
          }}
        >
          필터 초기화
        </div>
      </div>
      <div
        className="search_body_content"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          alignContent: 'stretch',
        }}
      >
        {data.length > 0
          ? data.map((element) => {
              return (
                <Card
                  style={{ width: '20%', height: '250px', margin: 0 }}
                  hoverable
                  onClick={() => {
                    goDetail(element.goods_detail_seq)
                  }}
                  cover={
                    <img
                      style={{ height: '100px' }}
                      src={`${bucket_url}/${element.goods_image_path}`}
                    ></img>
                  }
                >
                  <Meta
                    title={element.goods_detail_nm}
                    description={element.goods_detail_address}
                  />
                  <Rate disabled defaultValue={element.goods_grade}></Rate>
                </Card>
              )
            })
          : ''}
      </div>
      <Search_Modal
        title={filterCat}
        category={filterCat}
        visible={modal}
        onOK={onOK}
        onCancle={onCancle}
      ></Search_Modal>
    </div>
  )
}

Search_Body.propTypes = {}

export default Search_Body
