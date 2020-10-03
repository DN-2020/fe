import React from 'react';
import PropTypes from 'prop-types';
import ConfirmSide from './components/ConfirmSide'
import ConfirmContent from './components/ConfirmContent'
import { Layout , Menu , Avatar,List} from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const ConfirmPresenter = props => {
    return (
        <>
        <Layout>
        <Header>s</Header>
        <h style = {{fontSize :" 45pt" , marginLeft : "20%"}}>예약내역</h>
        <Layout style ={{marginRight : "auto" , backgroundColor : "#ffffff" , marginLeft : "auto" , width : 950}}> 
        <Sider style={{backgroundColor : "#F2F2F2" , height : 100 , marginTop: "8%"}}>
        <ConfirmSide/>
      </Sider>

    <Content style ={{height : 500}}>
    <ConfirmContent/>
    </Content>
        </Layout>
        <Footer></Footer>
        </Layout>
        </>
    );
};

ConfirmPresenter.propTypes = {
    
};

export default ConfirmPresenter;