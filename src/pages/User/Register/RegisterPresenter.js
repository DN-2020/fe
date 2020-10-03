import React from 'react';
import {Link} from "react-router-dom"
import {Card , Button , Layout , Input} from 'antd';
import PropTypes from 'prop-types';
import {NodeExpandOutlined, UserOutlined} from '@ant-design/icons'
const { Header,Content } = Layout;
/*
npm install --save @ant-design/icons
*/ 


const RegisterPresenter = props => {
    return (
        <>
        <Layout>
        <Header>
        </Header>
        <Content>
        <Card style={{ width: 500 , height : 600, marginLeft : "auto" , marginRight :"auto"  , marginTop : "2%" , marginBottom : "10%"}}>
        <div style ={{textAlign : "center" , marginTop : "10%"}}>
        <Header>
        <p style ={{fontSize : 30 , color :"#ffffff"}}>회원가입</p>
        </Header> 
        <div style ={{marginLeft : "10%" , marginRight : "10%" , marginBottom : "10%" , marginTop : "10%"}}>
        <Input style={{border : "none" , borderBottom : "1px solid"}} placeholder="UserName" prefix={<UserOutlined />}/>  
        <br/><br/>
        <Input style={{border : "none" , borderBottom : "1px solid"}} placeholder="Id" prefix={<UserOutlined />} />
        <br/><br/>
        <Input.Password placeholder="pwd" style={{border : "none" , borderBottom : "1px solid"}} />
        <br/><br/>
        <Input placeholder="Address"  style={{border : "none" , borderBottom : "1px solid"}}/>  
        <br/><br/>
        <Input placeholder="Phone" style={{border : "none" , borderBottom : "1px solid"}}/>  
        <br/><br/>
        <Input placeholder="Email" type = "email"  style={{border : "none" , borderBottom : "1px solid"}}/>  
        <br/><br/>
        </div>
        <Button>SignUp</Button>
        <Button style ={{marginLeft : "15%"}}><Link to = "/user/login">Cancel</Link></Button>
        </div>
      </Card>
      </Content>
      </Layout>
        </>
    );
};

RegisterPresenter.propTypes = {
    
};

export default RegisterPresenter;