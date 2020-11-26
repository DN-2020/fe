import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { deleteCookie } from '../../Utils';
const Cus_Footer = (props) => {
	let history = useHistory();
	const goCompany = () => {
		history.push('/company');
	};
	return (
		<div
			className="cus_footer"
			style={{ marginTop: '4%', borderTop: '0.1px solid lightgray' }}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					width: '80%',
					marginTop: '3%',
					marginLeft: '10%',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'column',
					}}
				>
					<img src="logo192.png"></img>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'column',
						textAlign: 'left',
						width: '40%',
					}}
				>
					<h2>고객센터</h2>
					<h3>1588-0000</h3>
					<h3>
						월~금: 09:00~18:00 (점심시간 12:00~13:00) 공휴일 : 1:1 채팅 상담만
						가능 환불, 변경 접수: 월~금 09:00~17:00
					</h3>
					<Button style={{ width: '30%' }}>1:1채팅상담</Button>
				</div>
				<div
					style={{
						width: '15%',
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'column',
						textAlign: 'left',
					}}
				>
					<h2>소개</h2>
					<a style={{ color: 'black' }}>회사소개</a>
				</div>
				<div
					style={{
						width: '15%',
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'column',
						textAlign: 'left',
					}}
				>
					<h2>파트너</h2>
					<a style={{ color: 'black' }}>파트너 가이드</a>
					<a style={{ color: 'black' }}>파트너 등록하기</a>
				</div>
				<div
					style={{
						width: '15%',
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'column',
						textAlign: 'left',
					}}
				>
					<h2>고객지원</h2>
					<a style={{ color: 'black' }}>자주 묻는 질문</a>
					<a style={{ color: 'black' }}>공지사항</a>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					marginTop: '1%',

					borderTop: '0.1px solid lightgray',
				}}
			>
				<div
					style={{
						width: '50%',
						display: 'flex',
						justifyContent: 'flex-start',
						marginTop: '1%',
					}}
				>
					<a style={{ width: '30%', color: 'black' }}>이용약관</a>
					<a style={{ width: '30%', color: 'black' }}>개언정보 처리 방침</a>
					<a style={{ width: '30%', color: 'black' }}>최소 및 환불 정책</a>
				</div>
				<div
					style={{
						width: '45%',
						display: 'flex',
						justifyContent: 'flex-end',
						marginTop: '1%',
						marginRight: '5%',
					}}
				>
					<Button
						onClick={() => {
							alert('로그아웃 됩니다.');
							deleteCookie('accessToken', {});
							history.push('/company/login');
						}}
					>
						관리자 콘솔
					</Button>
				</div>
			</div>
		</div>
	);
};

Cus_Footer.propTypes = {};

export default Cus_Footer;
