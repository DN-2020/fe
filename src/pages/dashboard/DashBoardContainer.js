import React, { useEffect, useState } from 'react';
import DashboardPresenter from './DashBoardPresenter';
import Admin_Reservation from '../../api/Admin_Reservation';

let eventId = 0;
export function createEventId() {
  return String(eventId++);
}
let arr1 = [];

const DashboardContainer = () => {
  const [body, setBody] = useState();
  const [reData, setRedata] = useState([]);
  const [AllMonney, setAllMoney] = useState();
  const [Count, setCount] = useState();
  const [scheduled, setScheduled] = useState();
  const [complete, setComplete] = useState();
  useEffect(() => {
    Admin_Reservation.getReservation().then((e) => {
      console.log(e);
      arr1 = e.data.map((e) => {
        console.log(e);
        return {
          id: eventId,
          title: e.reservation_goods_detail,
          content: e.goods_detail_nm,
          start: e.reservation_st,
          end: e.reservation_end,
          reservation_nm: e.reservation_nm,
          // goods_detail_price: e.goods_detail_price,
          // approval_total_price: e.approval_total_price,
          reservation_total_price: e.reservation_total_price,
          approval_method: e.approval_method,
        };
      });
      setRedata(e.data);
      setAllMoney(e.data[0].AllMoney);
      setCount(e.data[0].count);
      setScheduled(e.data[0].scheduled);
      setComplete(e.data[0].complete);
    });
  }, []);

  console.log(AllMonney, Count, scheduled);

  return (
    <div>
      <DashboardPresenter
        reData={arr1}
        scheduled={scheduled}
        Count={Count}
        AllMonney={AllMonney}
        complete={complete}
      />
    </div>
  );
};

export default DashboardContainer;
