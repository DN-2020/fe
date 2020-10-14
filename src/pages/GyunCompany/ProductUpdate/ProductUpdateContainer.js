import React from 'react'
import PropTypes from 'prop-types'
import ProductUpdatePresenter from './ProductUpdatePresenter'

const ProductUpdateContainer=(props)=> {
    return (
        <ProductUpdatePresenter props ={props}></ProductUpdatePresenter>
    )
}

ProductUpdateContainer.propTypes = {

}

export default ProductUpdateContainer

