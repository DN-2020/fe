import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReviewListPresenter from './ReviewListPresenter';
import reviewAPI from '../../../api/reviewAPI';

// let arr1 = [
//   {
//     goods_nm: 'goods_nm',
//     seq: 'review_seq',
//     review: 'e.review_content',
//     name: 'e.reservation_nm',
//     starRate: 'e.review_grade',
//     goods_detail_nm: 'e.goods_detail_nm',
//     goods_seq: 'e.goods_seq',
//   },
// ];
let arr1 = [];
let goods_nms = [];
let goods_seq = [];
const ReviewListContainer = (props) => {
  const [reviewList, setReviewList] = useState([]);
  // const [goods_nm, setGoods_nm] = useState();
  useEffect(() => {
    reviewAPI.getReview().then((e) => {
      console.log(e);
      // goods_nms = e.data.map((e) => {
      //   return {
      //     goods_nm: e.goods_nm,
      //   };
      // });

      goods_nms = e.data.map((e) => e.goods_detail_nm);
      goods_seq = e.data.map((e) => e.goods_detail_seq);
      // arr1 = e.data.map((e) => {
      // setGoods_nm(e.goods_nm);
      // return {
      // key: e.goods_detail_nm,
      //     goods_nm: e.goods_nm,
      //     seq: e.review_seq,
      //     review: e.review_content,
      //     name: e.reservation_nm,
      //     starRate: e.review_grade,
      //     goods_detail_nm: e.goods_detail_nm,
      //     goods_seq: e.goods_seq,
      //     // e,
      //   };
      // });
      setReviewList(e.data);

      // console.log(goods_nms);
      //   setGoods_nm(e.data[0].goods_detail_nm);
    });
  }, []);
  console.log('11 : ' + goods_nms);
  return (
    <ReviewListPresenter
      // arr1={arr1}
      goods_nm={goods_nms}
      goods_seq={goods_seq}
    ></ReviewListPresenter>
  );
};

ReviewListContainer.propTypes = {};

export default ReviewListContainer;
