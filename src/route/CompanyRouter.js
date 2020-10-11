import React,{useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Main, Search,ProductDetail,Reservation,AccountInfoContainer,LoginContainer,RegisterContainer,DetailContainer , ConfirmContainer , CancelContainer,CancelDetailContainer,ConfirmCancelContainer} from '../pages';
import Company_Res_Container from"../pages/Company/ReservationList"
const { Header, Content, Sider,Footer } = Layout;
const { SubMenu } = Menu;

const CompanyRouter = (props) => {
  const [collpase,setCollapse]= useState("");
  return(
  
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collpase} onCollapse={setCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" >
              Option 1
            </Menu.Item>
            <Menu.Item key="2" >
              Option 2
            </Menu.Item>
            <SubMenu key="sub1"  title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={style.contentLayout} >
              <h1>{1}</h1>
          </Header>
          <Content style={{textAlign:"left", margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ background:"white", padding: 24, minHeight: 360 }}>
            <Route exact path="/company" component={Company_Res_Container}></Route>  
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>       
  </>
)};
const style={
  contentLayout:{
    background:"#fff"
  }
}
export default CompanyRouter;
