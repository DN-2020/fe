import { Layout, Input, Avatar, Dropdown, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { bucket_url, deleteCookie, getCookie } from '../../Utils';

const { Meta } = Card;
const { Header } = Layout;
const { Search } = Input;

const Cus_Header = (props) => {
	let history = useHistory();
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const token = getCookie('accessToken');
		console.log(token);
		if (token != undefined) {
			setLogin(true);
		}
	}, [props]);
	const handleSearch = (e) => {
		if (e != '') {
			history.push(`/user/search?key=${e}`);
		}
	};
	const menu = (
		<Menu>
			<Menu.Item>
				<a className="gyun_items">장바구니</a>
			</Menu.Item>
			<Menu.Item>
				<a className="gyun_items" onClick={() => history.push('/user/confirm')}>
					예약
				</a>
			</Menu.Item>
			<Menu.Item>
				<a
					className="gyun_items"
					onClick={() => history.push('/user/accountinfo')}
				>
					마이페이지
				</a>
			</Menu.Item>
			<Menu.Item>
				<a
					className="gyun_items"
					onClick={() => {
						deleteCookie('accessToken', {});
						if (
							history.location.pathname == '/' ||
							history.location.pathname == '/user'
						) {
							window.location.reload(false);
						}
					}}
				>
					로그아웃
				</a>
			</Menu.Item>
		</Menu>
	);
	const goMain = () => {
		history.push('/user');
	};
	return (
		<>
			<div className="gyun_header" style={style.header}>
				<div className="gyun_logo" style={{ textAlign: 'center' }}>
					<a onClick={() => goMain()}>
						<img
							style={{ height: '80px' }}
							src={`${bucket_url}/c79c34de-19ba-4f57-9e85-27d24f05b9b6`}
						></img>
					</a>
				</div>
				<div style={{ width: '10%' }}></div>
				<div className="gyun_search_container" style={{ width: '25%' }}>
					<Search
						className="gyun_searchs"
						allowClear
						onSearch={handleSearch}
					></Search>
				</div>
				<div style={{ width: '30%' }}></div>
				<div className="gyun_menu_container">
					<ul className="gyun_menus"></ul>
				</div>
				<div style={{ width: '20%' }}></div>
				<div clasName="gyun_profile">
					{login == true ? (
						<div style={{ display: 'flex' }}>
							<Dropdown overlay={menu}>
								<Avatar></Avatar>
							</Dropdown>
							<h2 stlye={{ fontSize: '30px' }}>username</h2>
						</div>
					) : (
						<div style={{ display: 'flex' }}>
							<Button
								onClick={() => {
									history.push('/user/login');
								}}
								style={{ width: '40%', marginRight: '10%' }}
							>
								로그인
							</Button>
							<Button style={{ width: '40%' }}>회원가입</Button>
						</div>
					)}
				</div>
			</div>
			<div
				className="gyun_nav_container"
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					marginLeft: '10%',
					marginTop: '1%',
				}}
			>
				<Card
					onClick={() => {
						history.push('/user/search?category=1');
					}}
					className="gyun_nav_rent"
					style={{ marginRight: '1%' }}
					hoverable
					cover={<div style={{ fontSize: '30px' }}>🏠</div>}
				>
					<Meta description="펜션"></Meta>
				</Card>
				<Card
					onClick={() => {
						history.push('/user/search?category=2');
					}}
					className="gyun_nav_lodg"
					style={{ marginRight: '1%' }}
					hoverable
					cover={<div style={{ fontSize: '30px' }}>🏢</div>}
				>
					<Meta description="리조트"></Meta>
				</Card>
				<Card
					onClick={() => {
						history.push('/user/search?category=3');
					}}
					className="gyun_nav_byc"
					style={{ marginRight: '1%' }}
					hoverable
					cover={<div style={{ fontSize: '30px' }}>🚲</div>}
				>
					<Meta description="자전거"></Meta>
				</Card>
				<Card
					onClick={() => {
						history.push('/user/search?category=4');
					}}
					className="gyun_nav_moto"
					style={{ marginRight: '1%' }}
					hoverable
					cover={<div style={{ fontSize: '30px' }}>🚗</div>}
				>
					<Meta description="자동차"></Meta>
				</Card>
				<Card
					onClick={() => {
						history.push('/user/search?category=5');
					}}
					className="gyun_nav_moto"
					style={{ marginRight: '1%' }}
					hoverable
					cover={<div style={{ fontSize: '30px' }}>🛵</div>}
				>
					<Meta description="오토바이"></Meta>
				</Card>
			</div>
		</>
	);
};

Cus_Header.propTypes = {};
const style = {
	header: {
		display: 'flex',
		width: '80%',
		marginLeft: '10%',
		alignItems: 'center',
		borderBottom: '0.1px solid lightgray',
	},
};
export default Cus_Header;
