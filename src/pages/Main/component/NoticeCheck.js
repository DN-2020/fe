import React from "react";
import { PageTitle } from "../../../../src/component";

const NoticeCheck = props => {
  const notice = [
    {
      title: "공지사항입니다",
      reqDate: "2020-01-03"
    },
    {
      title: "안녕하세요",
      reqDate: "2019-10-16"
    },
    {
      title: "상품 추가 안내",
      reqDate: "2019-10-16"
    }
  ];
  return (
    <div style={{ width: "95%", margin: "2% 5%" }}>
      <div style={{ margin: "0 1%" }}>
        <PageTitle>공지사항</PageTitle>
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
          공지사항
        </div>
        <div style={styles.boxContainer}>
          {notice.map(element => (
            <div
              style={{ margin: "2% 2%", display: "flex", flexDirection: "row" }}
            >
              <div style={styles.boxMain}>{element.title}</div>
              <div style={styles.boxChild}>{element.reqDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeCheck;

const styles = {
  boxContainer: {
    alignItems: "center",
    margin: "0 2%"
  },
  boxMain: {
    width: "50%",
    display: "flex",
    justifyContent: "start",
    fontSize: "1rem"
  },
  boxChild: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "0.8rem",
    color: "#8f8f8f"
  }
};
