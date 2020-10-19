import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Avatar } from 'antd'

const { Meta } = Card

const test = ({ data }) => {
  return (
    <>
      <Meta
        style={{ marginLeft: '35%' }}
        avatar={
          <Avatar
            style={{ height: 150, width: 150 }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        }
      />
      <div style={{ marginTop: '15%' }}>
        이름 : {data.name}
        <br />
        <br />
        email : {data.email} <br />
        <br />
        연락처 : {data.phonenum}
      </div>
    </>
  )
}

test.propTypes = {}

export default test
