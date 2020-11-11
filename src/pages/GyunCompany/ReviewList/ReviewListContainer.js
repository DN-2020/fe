import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewListPresenter from './ReviewListPresenter';
import reviewAPI from '../../../api/reviewAPI';

const ReviewListContainer = (props) => {
  useEffect(() => {
    reviewAPI.getReview().then((e) => console.log(e));
  }, []);

  return <ReviewListPresenter props={props}></ReviewListPresenter>;
};

ReviewListContainer.propTypes = {};

export default ReviewListContainer;
