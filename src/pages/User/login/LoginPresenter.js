import React, { useState } from 'react';
import { Card, Button, Layout, Input } from 'antd';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import GyunLoginAPI from '../../../api/GyunLoginAPI';
import { setCookie } from '../../../Utils';
const { Header, Content } = Layout;

const LoginPresenter = (props) => {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	let history = useHistory();
	const onLogin = async () => {
		const body = { customer_email: id, customer_pw: pw };
		const response = await GyunLoginAPI.login(body);
		if (response.code == 200) {
			setCookie('accessToken', response.data.accessToken);
			history.push('/user');
		} else {
			alert('잘못된 아이디나 비밀번호입니다.');
		}
	};
	return (
		<>
			<Layout>
				<Content>
					<Card style={style.cardStyle}>
						<div style={{ textAlign: 'center', marginTop: '10%' }}>
							<Header>
								<p style={{ fontSize: 30, color: '#ffffff' }}>로그인</p>{' '}
							</Header>
							<div style={style.InputDivStyle}>
								<Input
									placeholder="ID"
									value={id}
									onChange={(e) => {
										setId(e.target.value);
									}}
									style={{ border: 'none', borderBottom: '1px solid' }}
								/>
								<br />
								<br />
								<Input.Password
									placeholder="password"
									value={pw}
									onChange={(e) => {
										setPw(e.target.value);
									}}
									style={{ border: 'none', borderBottom: '1px solid' }}
								/>
							</div>
							<Button
								onClick={() => {
									onLogin();
								}}
							>
								Login
							</Button>
							<Button style={style.SignUpButtonStyle}>
								<Link to="/user/register">SignUp</Link>
							</Button>
						</div>
					</Card>
				</Content>
			</Layout>
		</>
	);
};

LoginPresenter.propTypes = {};

const style = {
	cardStyle: {
		width: 500,
		height: 500,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '5%',
		marginBottom: '20%',
	},
	InputDivStyle: {
		marginLeft: '10%',
		marginRight: '10%',
		marginBottom: '20%',
		marginTop: '10%',
	},
	SignUpButtonStyle: {
		marginLeft: '10%',
	},
};
export default LoginPresenter;
