import React, { useEffect, useState } from 'react';
import DashboardPresenter from './DashBoardPresenter';
import Admin_Reservation from '../../api/Admin_Reservation';
import { Company_Login } from '../../api';
import { setCookie } from '../../Utils';

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
  const [company_nm, setCompany_nm] = useState();
  useEffect(() => {
    Admin_Reservation.getReservation().then((e) => {
      arr1 = e.data.map((e) => {
        return {
          id: eventId,
          title: e.reservation_goods_detail,
          content: e.goods_detail_nm,
          start: e.reservation_st,
          end: e.reservation_end,
          reservation_nm: e.reservation_nm,
          reservation_total_price: e.reservation_total_price,
          approval_method: e.approval_method,
        };
      });
      setRedata(e.data);
      setAllMoney(e.data[0].AllMoney);
      setCount(e.data[0].count);
      setScheduled(e.data[0].scheduled);
      setComplete(e.data[0].complete);
      setCompany_nm(e.data[0].company_nm);
    });
  }, []);

  const getUser = async () => {
    const response = await Company_Login.companylogin();

    setCookie('accessToken', response.data.accessToken);
  };
  return (
    <div>
      <DashboardPresenter
        reData={arr1}
        scheduled={scheduled}
        Count={Count}
        AllMonney={AllMonney}
        complete={complete}
        company_nm={company_nm}
      />
    </div>
  );
};

export default DashboardContainer;
