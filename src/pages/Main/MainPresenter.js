import React from 'react'
import PropTypes from 'prop-types'

import Cus_Body from './Cus_Body'


const MainPresenter = (props) => {
  return (
    <div>
      <Cus_Body props={props}></Cus_Body>

    </div>
  )
}

MainPresenter.propTypes = {

}

export default MainPresenter

