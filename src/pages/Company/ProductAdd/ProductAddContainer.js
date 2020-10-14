import React from 'react'
import PropTypes from 'prop-types'
import ProductAddPresenter from './ProductAddPresenter'

const ProductAddContainer=(props)=> {
    return (
        <ProductAddPresenter props ={props}></ProductAddPresenter>
    )
}

ProductAddContainer.propTypes = {

}

export default ProductAddContainer

