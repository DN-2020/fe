import React from 'react'
import PropTypes from 'prop-types'
import ProductDetailPresenter from './ProductDetailPresenter'

const ProductDetailContainer=(props)=> {
    return (
        <ProductDetailPresenter props ={props}></ProductDetailPresenter>
    )
}

ProductDetailContainer.propTypes = {

}

export default ProductDetailContainer

