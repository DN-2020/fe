import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ResListPresenter from './ResListPresenter';
import Company_Reservation from '../../../api/Company_Reservation';
import Axios from 'axios';
import { get } from 'js-cookie';
// import { setCookie, getCookie } from '../../Utils';

let eventId = 0;
export function createEventId() {
  return String(eventId++);
}
let arr1 = [];
let goods_seq = [];
let goods_name = [];

const ResListContainer = (props) => {
  const [reData, setRedata] = useState([]);
  useEffect(() => {
    Company_Reservation.getReservation().then((e) => {
      goods_seq = e.data.map((e) => e.goods_detail_seq);
      goods_name = e.data.map((e) => e.goods_detail_nm);
      setRedata(e.data);
    });
  }, []);

  return (
    <ResListPresenter
      reData={arr1}
      goods_name={goods_name}
      goods_seq={goods_seq}
    ></ResListPresenter>
  );
};

ResListContainer.propTypes = {};

export default ResListContainer;
