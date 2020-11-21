import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewDetailPresenter from './ReviewDetailPresenter';

const ReviewDetailContainer = (props) => {
  const [goods_nm, setGoods_nm] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [starRate, setStarRate] = useState('');

  //   const [goods_nm, setGoods_nm] = useState('');
  //   const [goods_nm, setGoods_nm] = useState('');
  //   const [goods_nm, setGoods_nm] = useState('');

  //   setGoods_nm(props.history.location.state.detail.goods_nm);
  //   setName(props.history.location.state.detail.name);
  //   setReview(props.history.location.state.detail.review);
  //   setStarRate(props.history.location.state.detail.starRate);
  console.log(props.history.location.state.detail.name);
  console.log(props.state);
  console.log('dddd');
  return (
    <ReviewDetailPresenter
      props={props}
      //   name={name}
    ></ReviewDetailPresenter>
  );
};

ReviewDetailContainer.propTypes = {};

export default ReviewDetailContainer;
