import React from 'react';
import PropTypes from 'prop-types';
import ReviewListPresenter from './ReviewListPresenter';

const ReviewListContainer = (props) => {
	return <ReviewListPresenter props={props}></ReviewListPresenter>;
};

ReviewListContainer.propTypes = {};

export default ReviewListContainer;
