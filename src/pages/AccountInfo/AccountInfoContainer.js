import React, { useEffect, useState } from 'react';
import {
  User_Reservation,
  MyInfo,
  User_ReviewList,
  User_refund,
} from '../../api';
// import MyInfo from '../../api/MyInfo';
import AccountInfoPresenter from './AccountInfoPresenter';
let arr1 = [];
let arr2 = [];
let arr3 = [];
const AccountInfoContainer = () => {
  const [customer_email, setCustomer_email] = useState();
  const [customer_nm, setCcustomer_nm] = useState();
  const [customer_tel, setCcustomer_tel] = useState();
  const [address, setAddress] = useState();
  const [DetailAddress, setDetailAddress] = useState();
  const [UserInfo, setUserInfo] = useState([{}]);
  const [UserReview, setUserReview] = useState([{}]);
  const [UserRefund, setUserRefund] = useState([{}]);

  useEffect(async () => {
    await MyInfo.getMyInfo().then((e) => {
      setCustomer_email(e.data.customer_email);
      setCcustomer_nm(e.data.customer_nm);
      setCcustomer_tel(e.data.customer_tel);
      setDetailAddress(e.data.customer_detail_address);
      setAddress(e.data.customer_address);
    });
    await User_Reservation.getReservation().then((e) => (arr1 = e.data));
    await User_ReviewList.getReviewList().then((e) => (arr2 = e.data));
    await User_refund.getReservation().then((e) => (arr3 = e.data));
    // await User_refund.getReservation().then((e) => console.log(e));
    // await User_Reservation.getReservation().then((e) => console.log(e));

    setUserInfo(arr1);
    setUserReview(arr2);
    setUserRefund(arr3);
  }, []);

  console.log(UserRefund);
  console.log(UserInfo);

  return (
    <div>
      <AccountInfoPresenter
        customer_email={customer_email}
        customer_nm={customer_nm}
        customer_tel={customer_tel}
        setCustomer_email={setCustomer_email}
        setCcustomer_nm={setCcustomer_nm}
        setCcustomer_tel={setCcustomer_tel}
        address={address}
        DetailAddress={DetailAddress}
        UserInfo={UserInfo}
        UserReview={UserReview}
        UserRefund={UserRefund}
      />
    </div>
  );
};

export default AccountInfoContainer;
