import React, { useState, useEffect, useContext } from 'react'


import Emp_Register from '../../api/Emp_Register'

import { Form, Input, InputNumber, Button, Select, Layout } from 'antd';
import { useHistory } from 'react-router-dom'

function EmployeeRegisterPresenter(props) {
	const { Content, Sider, Header } = Layout;
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not validate email!',
		number: '${label} is not a validate number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
let history = useHistory()
const [empName, setEmpName] = useState({})
const [empEmail, setEmpEmail] = useState('')
const [department, setDepartment] = useState('')
const [empPassword, setEmpPassoword] = useState('')
const [empTel, setEmpTel] = useState('')
const [empAddress, setEmpAddress] = useState('')


const registerEmp = async (
    empName,
    empEmail,
    department,
    empPassword,
    empTel,
    empAddress,
    
  ) => {
	  
   

    const body = {
	  emp_nm: empName,
	  emp_email: empEmail,
	  emp_tel:empTel,
      emp_pw: empPassword,
      emp_address: empAddress,
    
    }
    const response = await Emp_Register.emp_register(body)
    if (response.code == 200) {
	  console.log("등록")
      history.push('/company/employee')
    }
  }
 


  
  const onFinish = (values) => {
	console.log(values);
};


  return (
    <>
      <Header style={style.headerLayout}>
				<h1>사원등록</h1>
			</Header>
			<div className="contentContainer" style={style.container}>
				<Layout style={{ minHeight: '100vh' }}>
					<Layout className="site-layout">
						<Content
							style={{
								marginTop: '1%',
								marginLeft: '1%',
								marginRight: '1%',
								background: 'white',
							}}
						>
							<div style={{ marginRight: 300 }}>
								<Form
									{...layout}
									name="nest-messages"
									onFinish={onFinish}
									validateMessages={validateMessages}
								>
									<Form.Item label="사원명">
										<Input onChange={(e) => {setEmpName(e.target.value)}}/>
									</Form.Item>
							
									<Form.Item label="부서선택">
									    <Input onChange={(e) => {setDepartment(e.target.value)}}/>
									</Form.Item>
									<Form.Item label="이메일">
										<Input onChange={(e) => {setEmpEmail(e.target.value)}}/>
									</Form.Item>
									<Form.Item label="비밀번호">
										<Input type="password" onChange={(e) => {setEmpPassoword(e.target.value)}}/>
									</Form.Item>
									<Form.Item label="전화번호">
										<Input onChange={(e) => {setEmpTel(e.target.value)}}/>
									</Form.Item>
									<Form.Item label="주소">
										<Input onChange={(e) => {setEmpAddress(e.target.value)}}/>
									</Form.Item>
									<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
									<Button
              type={'primary'}
              style={{ marginRight: '10px' }}
              onClick={() => {
                registerEmp(
				  empName,
				  department,
                  empEmail,
                  empPassword,
                  empTel,
                  empAddress,
                  
                )
              }}
            >
              등록
            </Button>
										&nbsp;
										<Button type="primary" htmlType="submit">
											등록하기
										</Button>
									</Form.Item>
								</Form>
							</div>
						</Content>
					</Layout>
				</Layout>
			</div>
			);
    </>
  )
}
EmployeeRegisterPresenter.propTypes = {};
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
export default EmployeeRegisterPresenter

