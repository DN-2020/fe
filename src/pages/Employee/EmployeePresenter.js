import React, { useState } from 'react';
import { Layout } from 'antd';
import { Table, Tag, Space, Button } from 'antd';
import { useHistory } from 'react-router-dom'
const { Column, ColumnGroup } = Table;
const { Content, Sider, Header } = Layout;


const EmployeePresenter = (props) => {
  let history = useHistory()
  console.log(props.empdata);
  const [currentPage, setCurrentPage] = useState(1); //시작
  const [postPerPage] = useState(5); //개수
  let indexOfLastPost = currentPage * postPerPage; //페이지에 마지막 데이터 인덱스/3
  let indexOfFirstPost = indexOfLastPost - postPerPage; //페이지 첫번째 데이터 인덱스/0
  let datas = props.empdata.slice(indexOfFirstPost, indexOfLastPost); //  1*5 last = 5 ,,, first = 0/0,3/
  let count = []; //  2*5 last = 10 ,,, first = 5
  let total = Math.ceil(props.empdata.length / postPerPage); //버튼count

  const handleDetail = (data) => {

    console.log(data)
    history.push(`/company/employeeDetail/${data.emp_seq}`)
  }

  for (let i = 1; i <= total; i++) {
    count.push(i);
  }
  return (
    <>
      <Header style={style.headerLayout}>
        <h1>사원관리</h1>
      </Header>
      <div className="contentContainer" style={style.container}>
        <Layout style={{ minHeight: '100vh' }}>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <div
                style={{
                  marginTop: '1%',
                  marginLeft: '1%',
                  marginRight: '1%',
                  background: 'white',
                }}
              >
                <a href="http://localhost:3000/company/employeeRegister">
                  <Button style={{ float: 'right' }}>등록</Button>
                </a>

                <Table dataSource={datas} pagination={false}>
                  <Column title="번호" dataIndex="dept_seq" key="dept_seq" />
                  <Column title="이름" dataIndex="emp_nm" key="emp_nm" />
                  <Column
                    title="전화번호"
                    dataIndex="emp_phone"
                    key="emp_phone"
                  />
                  <Column
                    title="수정"
                    key="action"
                    render={(text, record) => (
                      <Space size="middle">
                        
                  <Button style={{ float: 'right' }} onClick={()=>handleDetail(record)}>상세</Button>
               
                      </Space>
                    )}
                  />
                </Table>
                <div>
                  {count.map((e) => (
                    <Button key={e} onClick={() => setCurrentPage(e)}>
                      {e}
                    </Button>
                  ))}
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

EmployeePresenter.propTypes = {};
const style = {
  headerLayout: {
    background: '#fff',
    textAlign: 'left',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
};

export default EmployeePresenter;
