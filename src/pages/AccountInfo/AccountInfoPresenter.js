import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Layout , Card , Button} from 'antd';
import Search from './components/Search'
import Modify from './components/Modify'
import AccountInfoSider from './components/AccountInfoSider'

const { Header, Footer, Sider, Content } = Layout;
const AccountInfoPresenter = props => {

  const [page , setPage] = useState(true)

const ChangeInfo = (e) => {
  setPage(!page)
}


return (
<>
<Layout  style ={{height : 800}}>
<Header>dd</Header>

<Layout style ={{marginLeft : "auto" , backgroundColor : "#ffffff" ,width : 950,marginRight : "auto"}}>

<Sider style ={{height : 300 , marginTop : "10%" , marginLeft : "auto"}}> 
<AccountInfoSider/>
</Sider>

<Content>
    <Card
    hoverable
    style={{ width: 500 , height : 500  , marginTop : "10%" ,marginLeft:"10%", borderColor : "black" }}
    extra={page? <Button onClick = {ChangeInfo} >편집하기</Button> : null}>
    {page ? <Search/>  : <Modify props = {ChangeInfo}/>}
    </Card>
</Content>
</Layout>
<Footer></Footer>
</Layout>
      </>
    );
};

AccountInfoPresenter.propTypes = {
    
};

export default AccountInfoPresenter;