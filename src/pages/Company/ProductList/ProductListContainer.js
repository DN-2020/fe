import React from 'react'
import PropTypes from 'prop-types'
import ProductListPresenter from './ProductListPresenter'

const ProductListContainer=(props)=> {
    return (
        <ProductListPresenter props ={props}></ProductListPresenter>
    )
}

ProductListContainer.propTypes = {

}

export default ProductListContainer

