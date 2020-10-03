import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Steps, message } from 'antd';

const { Step } = Steps;


const DetailContent = props => {
    return (
        <>
        <div style ={{ height : "750px"}}>
        <div style ={{marginLeft : "30%" , marginRight:"30%" , marginTop : "2%"}}>
        <Steps size = "small" current={0}>
        <Step title = "예약중"/>
        <Step title = "예약완료"/>
        </Steps>
        </div>

        <Step/>
        <div align = "center">
        <div style ={{marginTop : "2%"}}>
            <table border = "1" style ={{width : 400 , height : 400}} >
            <tbody>
            <tr align = "center">
            <td colSpan = "4" style ={{fontSize : "20pt"}}>예약상세</td>
            </tr>
            <tr align = "center">
            <td>예약 <br/>번호</td>
            <td colSpan = "3"  style ={{height : "30%"}}>123456</td>
            </tr>
            <tr align = "center">
            <td>체크 <br/> 인</td>
            <td >2020-08-07 13:30</td>
            <td>체크 <br/> 아웃</td>
            <td >2020-08-08 11:00</td>
            </tr>
            <tr align = "center">
            <td>옵션</td>
            <td colSpan = "3" >굿즈 네임 디테일</td>
            </tr>
            <tr align = "center">
            <td>여행 <br/> 컨셉</td>
            <td colSpan = "3" >연인과 함께 하는</td>
            </tr>
            <tr align = "center">
            <td>구매자 <br/>정보</td>
            <td colSpan = "3">이메일 : abc@naver.com <br/> 영문이름: hong <br/> 한글이름 : 홍길동 <br/> 성별 : 남 <br/> 숙소도착 : 13:40</td>
            </tr>
            </tbody>
            </table>
            </div>
            <div style ={{marginTop : "2%"}} >
            <table border= "1" style = {{width : 400 , height : 200}} >
            <tbody>
            <tr align = "center">
            <td colSpan = "3" style ={{fontSize : "20pt"}}>결제 금액 <Button style ={{marginLeft : "15%" , marginBottom : "2%"}}>영수증</Button></td>
            </tr>            
            <tr align = "center">
            <td >결제 일</td>
            <td >2020-07-25  21:35</td>
            <td >여행금액 3200<br/> 할인금액 2000</td>
            </tr>
            <tr align = "center">
            <td >결제 수단</td>
            <td >토스</td>
            <td>결제 금액 30000</td>
            </tr>
            </tbody>
            </table>
            <Button type="primary" style ={{marginTop : "3%" , marginBottom : "20%"}}>취소하기</Button>
            </div>
            <br/>
            <br/>
            </div>
            </div>
            </>
    );
};

DetailContent.propTypes = {
    
};

export default DetailContent;