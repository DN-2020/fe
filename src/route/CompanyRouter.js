import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { bucket_url, deleteCookie, getCookie } from '../Utils';
import { Layout, Menu, Breadcrumb } from 'antd';

import {
	ProductListContainer,
	ProductDetailContainer,
	ProductUpdateContainer,
	ProductAddContainer,
	ResListContainer,
	ReviewListContainer,
	ReviewDetailContainer,
	DashBoardContainer,
	CustomerContainer,
	Company,
	CompanyDetail,
	CompanyApprove,
	CompanyApproveDetail,
	Employee,
	EmployeeRegister,
	EmployeeDetail,
	Department,
	DepartmentRegister,
	DepartmentDetail,
	CompanyLogin,
} from '../pages';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

const CompanyRouter = (props) => {
	let history = useHistory();
	const [login, setLogin] = useState(true);
	const [key, setKey] = useState(props.key);

	const handleKey = (e) => {
		console.log(e);
		setKey(e.key);
	};
	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				{login != false ? (
					<>
						<Route path="/company">
							<Sider>
								<div className="logo" />
								<Menu
									theme="dark"
									selectedKeys={key}
									defaultSelectedKeys={['1']}
									mode="inline"
								>
									<Menu.Item key="1" onClick={handleKey}>
										<Link to={{ pathname: '/company/dashboard' }}>
											대시보드
										</Link>
									</Menu.Item>
									<SubMenu key="sub1" title="상품 및 예약">
										<Menu.Item key="2" value={'1'} onClick={handleKey}>
											<Link to={{ pathname: '/company/product' }}>
												상품관리
											</Link>
										</Menu.Item>
										<Menu.Item key="3" onClick={handleKey}>
											<Link to={{ pathname: '/company/reservation' }}>
												예약관리{' '}
											</Link>
										</Menu.Item>
									</SubMenu>
									<SubMenu key="sub2" title="리뷰 및 댓글 관리">
										<Menu.Item key="5" onClick={handleKey}>
											<Link to={{ pathname: '/company/review' }}>
												리뷰 관리
											</Link>
										</Menu.Item>
									</SubMenu>
									<SubMenu key="sub3" title="고객관리">
										<Menu.Item key="6" onClick={handleKey}>
											<Link to={{ pathname: '/company/customer' }}>
												고객관리
											</Link>
										</Menu.Item>
									</SubMenu>
									<SubMenu key="sub4" title="회사 및 부서관리">
										<Menu.Item key="7" onClick={handleKey}>
											<Link to={{ pathname: '/company/companys' }}>
												회사관리
											</Link>
										</Menu.Item>
										<Menu.Item key="8" onClick={handleKey}>
											<Link to={{ pathname: '/company/department' }}>
												{' '}
												부서관리
											</Link>
										</Menu.Item>
									</SubMenu>
									<SubMenu key="sub5" title="사원관리">
										<Menu.Item key="9" onClick={handleKey}>
											<Link to={{ pathname: '/company/employee' }}>
												사원관리
											</Link>
										</Menu.Item>
									</SubMenu>
								</Menu>
							</Sider>
						</Route>
					</>
				) : (
					<></>
				)}
				<Layout className="site-layout">
					<Route exact path="/company" component={DashBoardContainer}></Route>
					<Route
						exact
						path="/company/login"
						component={CompanyLogin}
						props={setLogin}
					></Route>
					<Route
						exact
						path="/company/product"
						component={ProductListContainer}
					></Route>
					<Route
						exact
						path="/company/product/:num"
						component={ProductDetailContainer}
					/>
					<Route
						exact
						path="/company/product/update/:num"
						component={ProductUpdateContainer}
					></Route>
					<Route
						exact
						path="/company/new/product"
						component={ProductAddContainer}
					></Route>
					<Route
						exact
						path="/company/reservation"
						component={ResListContainer}
					></Route>
					<Route exact path="/company/review" component={ReviewListContainer} />
					<Route
						exact
						path="/company/review/:num"
						component={ReviewDetailContainer}
					/>
					<Route
						exact
						path="/company/dashboard"
						component={DashBoardContainer}
					/>
					<Route exact path="/company/companys" component={Company} />
					<Route
						exact
						path="/company/companyDetail"
						component={CompanyDetail}
					/>
					<Route
						exact
						path="/company/companyApprove"
						component={CompanyApprove}
					/>
					<Route
						exact
						path="/company/companyApproveDetail"
						component={CompanyApproveDetail}
					/>
					<Route exact path="/company/employee" component={Employee} />
					<Route
						exact
						path="/company/employeeRegister"
						component={EmployeeRegister}
					/>
					<Route
						exact
						path="/company/employeeDetail/:num"
						component={EmployeeDetail}
					/>
					<Route exact path="/company/department" component={Department} />
					<Route
						exact
						path="/company/departmentRegister"
						component={DepartmentRegister}
					/>
					<Route
						exact
						path="/company/departmentDetail/:num"
						component={DepartmentDetail}
					/>

					<Route exact path="/company/customer" component={CustomerContainer} />
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		</>
	);
};

export default CompanyRouter;
