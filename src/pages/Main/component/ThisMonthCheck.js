import React from "react";
import { PageTitle } from "../../../../src/component";
import { stringToMoneyFormat } from "../../../Utils";
import moment from "moment";
import "moment/locale/ko";

const ThisMonthCheck = props => {
  const { todayOrderList, thisMondayOrderList } = props;
  let todayPrice = 0;
  let todayReturnPrice = 0;
  let mondayPrice = 0;
  let mondayReturnPrice = 0;
  const todayOrder =
    todayOrderList !== null
      ? todayOrderList.filter(elmenet => {
          if (elmenet.orderState.toString() !== "주문실패") {
            if (elmenet.orderState.toString() !== "반품접수") {
              if (elmenet.orderState.toString() !== "반품완료") {
                todayPrice += elmenet.orderAmount;
                return elmenet;
              }
              todayPrice += elmenet.orderAmount;
              return elmenet;
            }
            todayPrice += elmenet.orderAmount;
            return elmenet;
          }
        })
      : [];

  const todayReturnOrderList =
    todayOrderList !== null
      ? todayOrderList.filter(elmenet => {
          if (
            elmenet.orderState.toString() === "반품접수" ||
            elmenet.orderState.toString() === "반품완료"
          ) {
            todayReturnPrice += elmenet.orderAmount;
            return elmenet;
          }
        })
      : [];
  const mondayOrder =
    thisMondayOrderList !== null
      ? thisMondayOrderList.filter(elmenet => {
          if (elmenet.orderState.toString() !== "주문실패") {
            if (elmenet.orderState.toString() !== "반품접수") {
              if (elmenet.orderState.toString() !== "반품완료") {
                mondayPrice += elmenet.orderAmount;
                return elmenet;
              }
              mondayPrice += elmenet.orderAmount;
              return elmenet;
            }
            mondayPrice += elmenet.orderAmount;
            return elmenet;
          }
          return;
        })
      : [];
  const mondayReturnOrderList =
    thisMondayOrderList !== null
      ? thisMondayOrderList.filter(elmenet => {
          if (
            elmenet.orderState.toString() === "반품접수" ||
            elmenet.orderState.toString() === "반품완료"
          ) {
            mondayReturnPrice += elmenet.orderAmount;
            return elmenet;
          }
        })
      : [];
  return (
    <div style={{ width: "95%", margin: "2% 5%" }}>
      <div style={{ margin: "0 1%" }}>
        <PageTitle>주문 현황</PageTitle>
      </div>
      <div style={{ margin: "0 1%", border: "3px solid #e8e8e8" }}>
        <div
          style={{
            border: "3px solid #e8e8e8",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem"
          }}
        >
          당 일
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxMain}>주문 {todayOrder.length}건</div>
          <div style={styles.boxChild}>{stringToMoneyFormat(todayPrice)}원</div>
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxMain}>반품 {todayReturnOrderList.length}건</div>
          <div style={styles.boxChild}>
            {stringToMoneyFormat(todayReturnPrice)}원
          </div>
        </div>
      </div>
      <div style={{ margin: "2% 1%", border: "3px solid #e8e8e8" }}>
        <div
          style={{
            border: "3px solid #e8e8e8",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem"
          }}
        >
          {moment.utc(new Date()).format("MMM")}
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxMain}>주문 {mondayOrder.length}건</div>
          <div style={styles.boxChild}>
            {stringToMoneyFormat(mondayPrice)}원
          </div>
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxMain}>
            반품 {mondayReturnOrderList.length}건
          </div>
          <div style={styles.boxChild}>
            {stringToMoneyFormat(mondayReturnPrice)}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisMonthCheck;

const styles = {
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    height: "70px",
    alignItems: "center",
    margin: "0 2%"
  },
  boxMain: {
    width: "50%",
    display: "flex",
    justifyContent: "start",
    fontSize: "1.2rem"
  },
  boxChild: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "1rem"
  }
};
