import React, { useState, useEffect } from 'react';
import {
	Image,
	DatePicker,
	Space,
	List,
	Typography,
	Divider,
	Descriptions,
	Radio,
	Button,
	Rate,
	Card,
	Dropdown,
} from 'antd';
import ReactHtmlParser from 'react-html-parser';
import './Product.css';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import GyunProductAPI from '../../api/GyunProductAPI';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import GyunReviewAPI from '../../api/GyunReviewAPI';
import { getCookie } from '../../Utils';
const { RangePicker } = DatePicker;
const { Meta } = Card;
const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
];

const ProductDetailPresenter = (props) => {
	const [adult, setAdult] = useState(0);
	const [kid, setKid] = useState(0);
	const [baby, setBaby] = useState(0);
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [dropdown, setDropdown] = useState(false);
	const [product, setProduct] = useState({});
	const [review, setReview] = useState([]);
	let history = useHistory();
	const { num } = props.props.match.params;
	useEffect(() => {
		getProduct(num);
		getReview(num);
	}, []);
	const getProduct = async (num) => {
		const response = await GyunProductAPI.getProduct(num);
		setProduct(response.data);
	};
	const getReview = async (num) => {
		const response = await GyunReviewAPI.getReview(num);
		setReview(response.data);
	};
	const handleReservation = () => {
		const { goods_detail_seq } = product;
		if (getCookie('accessToken') == undefined) {
			alert('로그인을 해주세요');
			history.push('/user/login');
		} else {
			if (start == '') {
				alert('시작일을 선택하세요');
			} else if (end == '') {
				alert('종료일을 선택하세요');
			} else if (kid == 0 && adult == 0 && baby == 0) {
				alert('인원수를 선택하세요');
			} else {
				history.push({
					pathname: `/user/reservation/${goods_detail_seq}`,
					state: { end, start, people: kid + adult + baby, num },
				});
			}
		}
	};
	const onChange = (e) => {};
	const onOk = (e) => {
		setStart(e[0].format('YYYY-MM-DD'));
		if (e[1] != null) {
			setEnd(e[1].format('YYYY-MM-DD'));
		}
	};
	const handleDropdown = (e) => {
		setDropdown(!dropdown);
	};
	const handleKid = (e) => {
		if (e == '-') {
			if (kid == 0) {
			} else {
				setKid(kid - 1);
			}
		} else {
			setKid(kid + 1);
		}
	};
	const handleAdult = (e) => {
		if (e == '-') {
			if (adult == 0) {
			} else {
				setAdult(adult - 1);
			}
		} else {
			setAdult(adult + 1);
		}
	};
	const handleBaby = (e) => {
		if (e == '-') {
			if (baby == 0) {
			} else {
				setBaby(baby - 1);
			}
		} else {
			setBaby(baby + 1);
		}
	};

	const menu = (
		<div style={{ background: 'white', width: '500px' }}>
			<div style={{ display: 'flex', width: '100%' }}>
				<MinusCircleTwoTone onClick={() => handleAdult('-')} />
				성인:{adult}
				<PlusCircleTwoTone onClick={() => handleAdult('+')} />
			</div>
			<div>
				<MinusCircleTwoTone onClick={() => handleKid('-')} />
				아동:{kid}
				<PlusCircleTwoTone onClick={() => handleKid('+')} />
			</div>
			<div>
				<MinusCircleTwoTone onClick={() => handleBaby('-')} />
				유아:{baby}
				<PlusCircleTwoTone onClick={() => handleBaby('+')} />
			</div>
			<Button onClick={handleDropdown}>OK</Button>
		</div>
	);
	return (
		<div
			style={{
				width: '80%',
				marginLeft: '10%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				marginTop: '2%',
			}}
		>
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						width: '70%',
						flexWrap: 'wrap',
						textAlign: 'left',
					}}
				>
					<div
						className="product_detail"
						style={{
							width: '80%',
							height: '10%',
							display: 'flex',
							flexWrap: 'wrap',
						}}
					>
						<div style={{ width: '100%' }}>
							<h1>{product.goods_detail_nm}</h1>
						</div>
						<div style={{ width: '60%' }}>
							<Rate disabled value={product.goods_grade}></Rate>
						</div>
						<div style={{ width: '40%', flexDirection: 'flex-end' }}>
							<p>{product.goods_detail_price}원</p>
						</div>
					</div>
					<div style={{ width: '80%', marginTop: '1%', textAlign: 'left' }}>
						{ReactHtmlParser(product.goods_detail_expression)}
					</div>
				</div>
				<div
					style={{
						width: '20%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<div>
						<Card
							bordered
							style={{ width: '100%', margin: 0 }}
							title="업체이름"
						>
							<Meta
								style={{ textAlign: 'center' }}
								description={product.company_nm}
							/>
						</Card>
					</div>
					<div>
						<Card
							bordered
							style={{ width: '100%', height: '150px', marginTop: '3%' }}
							title="대여기간"
						>
							<RangePicker format="YYYY-MM-DD" onChange={onOk} onOk={onOk} />
						</Card>
					</div>
					<div>
						<Card
							bordered
							style={{ width: '100%', height: '250px', marginTop: '3%' }}
							title={product.goods_detail_nm}
						>
							<Dropdown
								trigger={'click'}
								visible={dropdown}
								onVisibleChange={handleDropdown}
								overlay={menu}
							>
								<Button>인원</Button>
							</Dropdown>
							<p>성인:{adult}</p>
							<p>아동:{kid}</p>
							<p>유아:{baby}</p>
							<p style={{ borderTop: '0.1px solid lightgray' }}>
								총원:{adult + kid + baby}
							</p>
						</Card>
					</div>
					<div>
						<Card title="예약하기" style={{ marginTop: '3%', height: '150px' }}>
							<div>가격:{(adult + kid + baby) * 450000}</div>
							<Button onClick={() => handleReservation()}>예약하기</Button>
						</Card>
					</div>
				</div>
			</div>
			<h2 style={{ textAlign: 'left', marginLeft: '5%' }}>Review</h2>
			{review != null ? (
				<>
					<List
						size="small"
						dataSource={review}
						renderItem={(item) => (
							<List.Item
								style={{
									display: 'flex',
									width: '60%',
									borderBottom: '0.1px solid lgihtgray',
									borderTop: '0.1px solid lgihtgray',
								}}
							>
								<div
									style={{
										marginLeft: '1%',
										width: '10%',
										display: 'flex',
										borderRight: '0.1px solid lightgray',
									}}
								>
									<div
										style={{
											width: '100%',
											display: 'flex',
											flexDirection: 'column',
										}}
									>
										<div
											style={{
												height: '50%',
												marginTop: '3%',
												textAlign: 'left',
											}}
										>
											{item.reservation_nm}
										</div>

										<div
											style={{
												height: '50%',
												marginTop: '3%',
												textAlign: 'left',
											}}
										>
											<a>report</a>
										</div>
									</div>
								</div>
								<div style={{ width: '50%', display: 'flex' }}>
									<div style={{ width: '30%' }}>{item.review_title}</div>
									<div style={{ width: '70%' }}>
										<Rate disabled value={item.review_grade}></Rate>
									</div>
								</div>
								<div style={{ width: '30%' }}>
									<div style={{ height: '30%', textAlign: 'left' }}>
										{item.review_createAt.slice(0, 10)}
									</div>
								</div>
							</List.Item>
						)}
					/>
					<br />
					<br />
					<br />
					<br />
				</>
			) : (
				<div>리뷰가 없습니다.</div>
			)}
		</div>
	);
};

ProductDetailPresenter.propTypes = {};

export default ProductDetailPresenter;
