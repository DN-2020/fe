import React from 'react'
import { Image, DatePicker, Space, List, Typography, Divider, Descriptions, Radio, Button } from 'antd';
import PropTypes from 'prop-types'
import moment from 'moment';
import {useHistory} from "react-router-dom";
const { RangePicker } = DatePicker;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  
];
const ProductDetailPresenter = (props) => {
  let history =useHistory();
  const handleReservation=(e)=>{
    history.push(`/reservation/${e}`)
  }
  return (
    <div style={{marginLeft:100}}>
  <br/>
  
      <h2>굿즈 이름</h2><br/>
      <div>
       
      <Image 
      style={{marginLeft:-700}}
      width={600}
      src="https://image.tport.io/gds_properties/56620/7fa08d41-65c5-4093-91cb-ffd9308f5733-1000.jpg"
    /><br></br>
    <Image
   style={{marginLeft:-700}}
      width={150}
      src="https://image.tport.io/gds_properties/56620/610d55df-fb6f-49a6-a615-a89c620ac334-1000.jpg"
    />
    <Image
      width={150}
      src="https://image.tport.io/gds_properties/56620/67f724d8-83e2-4328-b473-537922c40680-1000.jpg"
    />
    <Image
      width={150}
      src="https://image.tport.io/gds_properties/56620/c6d77931-7bce-4220-9da2-2c03c3fcb5f0-1000.jpg"
    />
    <Image
      width={150}
      src="https://image.tport.io/gds_properties/56620/c6d77931-7bce-4220-9da2-2c03c3fcb5f0-1000.jpg"
    />
    <Descriptions title="" bordered style={{float:"right",marginTop:-250,marginRight:100,width:500}}>
              <Descriptions.Item label="굿즈이름" span={3} style={{width:130}} >
              굿즈이름
              </Descriptions.Item>
              <Descriptions.Item label="굿즈정보" span={3}>
              굿즈정보
              </Descriptions.Item>
              <Descriptions.Item label="굿즈주소" span={3}>
              굿즈정보
           </Descriptions.Item>
           <Descriptions.Item label="굿즈전화번호" span={3}>
           굿즈 전화번호
           </Descriptions.Item>
            </Descriptions>
  
        </div>
    <br></br>
    <h2>가격비교</h2>
    
   
    <List
      size="small"
      style={{width:1250}}
      header={<RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
    
        />}
      footer={<Button style={{textAlign:"center"}}>가격 더 보기</Button>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}&nbsp;<Button  onClick={()=>handleReservation(item)} style={{float:"right", }}>button</Button></List.Item>}
    />
 <br/><br/>
<h2>Review</h2>
    <List
      style={{width:1250}}
      size="small"
      bordered
      dataSource={data}
      renderItem={item => <List.Item><a>{item}</a></List.Item>}
    /> <br/><br/><br/><br/>

    </div>
  )
}

ProductDetailPresenter.propTypes = {

}

export default ProductDetailPresenter

