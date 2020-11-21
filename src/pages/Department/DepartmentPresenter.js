import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Button, Layout } from 'antd';
import { useHistory } from 'react-router-dom'
const { Column, ColumnGroup } = Table;
const { Content, Sider, Header } = Layout;


const DepartmentPresenter = (props) => {
	let history = useHistory()
	console.log(props.deptdata);
	const [currentPage, setCurrentPage] = useState(1); //시작
	const [postPerPage] = useState(5); //개수
	let indexOfLastPost = currentPage * postPerPage; //페이지에 마지막 데이터 인덱스/3
	let indexOfFirstPost = indexOfLastPost - postPerPage; //페이지 첫번째 데이터 인덱스/0
	let datas = props.deptdata.slice(indexOfFirstPost, indexOfLastPost); //  1*5 last = 5 ,,, first = 0/0,3/
	let count = []; //  2*5 last = 10 ,,, first = 5
	let total = Math.ceil(props.deptdata.length / postPerPage); //버튼count

	const handleDetail = (data) => {

		console.log(data)
		history.push(`/company/departmentDetail/${data.dept_seq}`)
	  }
	
	  for (let i = 1; i <= total; i++) {
		count.push(i);
	  }
	return (
		<>
			<Header style={style.headerLayout}>
				<h1>부서관리</h1>
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
								<a href="http://localhost:3000/company/departmentRegister">
									<Button style={{ float: 'right' }}>등록</Button>
								</a>

								<Table dataSource={datas}>
								    <Column title="부서번호" dataIndex="dept_seq" key="dept_seq" />
									<Column title="부서명" dataIndex="dept_nm" key="dept_nm" />
									<Column title="부서관리자" dataIndex="dept_manager" key="dept_manager" />
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
							</div>
						</Content>
					</Layout>
				</Layout>
			</div>
			);
		</>
	);
};

DepartmentPresenter.propTypes = {};
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

export default DepartmentPresenter;
