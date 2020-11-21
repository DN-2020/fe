import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, Input, Slider } from 'antd'
const Search_Modal = (props) => {
  const [keyword, setKeyword] = useState('')
  const [price, setPrice] = useState([10, 50])
  useEffect(() => {
    getRender()
  }, [])
  const getRender = () => {
    switch (props.category) {
      case 'price':
        return (
          <>
            <Slider
              defaultValue={price}
              range
              onChange={(e) => {
                setPrice(e)
              }}
            ></Slider>
          </>
        )
        break
      case 'rate':
        return (
          <>
            <Input
              onChange={(e) => {
                setKeyword(e.target.value)
              }}
            ></Input>
          </>
        )
        break
      case 'location':
        return (
          <>
            <Input
              onChange={(e) => {
                setKeyword(e.target.value)
              }}
            ></Input>
          </>
        )
        break
    }
  }
  const handleOnOK = (e) => {
    if (props.category == 'price') {
      props.onOK(price, props.category)
    } else {
      props.onOK(keyword, props.category)
    }
  }
  return (
    <>
      <Modal
        title={props.category}
        visible={props.visible}
        onOk={handleOnOK}
        onCancle={props.onCancle}
      >
        {getRender()}
      </Modal>
    </>
  )
}

Search_Modal.propTypes = {}

export default Search_Modal
