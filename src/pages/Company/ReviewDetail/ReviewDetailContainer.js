import React from 'react';
import PropTypes from 'prop-types';
import ReviewDetailPresenter from './ReviewDetailPresenter';

const ReviewDetailContainer = (props) => {
	return <ReviewDetailPresenter props={props}></ReviewDetailPresenter>;
};

ReviewDetailContainer.propTypes = {};

export default ReviewDetailContainer;
