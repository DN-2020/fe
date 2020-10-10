import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from "swiper/react"

import { Card, Rate } from "antd";
import "./Main.css"
import {useHistory} from "react-router-dom";
import 'swiper/swiper-bundle.css';

const Cus_Body = (props) => {
    let history=useHistory();
    
    const { Meta } = Card;
    const imageStyle = {
        verticalAlign: 'center',
        width: "100 %"
    };
    const SlideStyle = {
        marginLeft: "10px"
    };
    const options = {
        loop: true,
        navigation: true,
        slidesPerView: 1,
        autoplay: { AutoplayOptions: true },
        spaceBetween: 50,
    };
    const slideStyle = {
        height: '500',
        width: 300,
        textAlign: 'center',
    };
    const handleProduct=(e)=>{
        history.push(`/productDetail/${e}`)
    }
    const value=1;
    return (
        <>
            <div className="gyun_body_container">
                <div className="image_slide">
                    <Swiper
                        style={{ border: "1px solid #f00" }}
                        {...options}
                        className="gyun_swiper"

                    >
                        <SwiperSlide key={1} style={slideStyle} >
                            <img style={imageStyle} src="logo192.png"></img>
                        </SwiperSlide>
                        <SwiperSlide key={2} style={slideStyle} >
                            <img style={imageStyle} src="logo192.png"></img>
                        </SwiperSlide>
                        <SwiperSlide key={3} style={slideStyle} >
                            <img style={imageStyle} src="logo192.png"></img>
                        </SwiperSlide>
                        <SwiperSlide key={4} style={slideStyle} >
                            <img style={imageStyle} src="logo192.png"></img>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className="main_content">
                <h1 style={{ textAlign: "left", fontSize: "30px" }}>렌트카</h1>
                <div className="main_rent_car">
                    <Swiper
                        navigation
                        slidesPerView={4}
                    >
                        <SwiperSlide>
                            <Card
                                onClick={()=>handleProduct(value)}
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[산방산/펜션]  #3층독채 #흑돼지 #용머리해안"
                                    description="제주시"
                                />
                                <Rate disabled defaultValue={2}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 켄고쿠마 B #독채 #자쿠지 #히노키 #TEA룸"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={3}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 도미니크 페로 A #독채 #수영장 #옥상정원"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/민박] 모랑모랑 스테이 #가족펜션 #전통돌집 #자쿠지 #바베큐"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={5}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/펜션] 통나무파크 호텔형 #숲속힐링 #알파카 #독채"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={0}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월한림/게하] 아는언니집 #여성전용 #전통돌집 #혼여 #바다"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="*13%할인*밴드 허클베리핀의 언플러그드 음악 여행 : 제주 2박3일"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={1}></Rate>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h1 style={{ textAlign: "left", fontSize: "30px" }}>숙소</h1>
                <div className="main_lodg">
                    <Swiper

                        navigation
                        slidesPerView={4}
                    >
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[산방산/펜션] 쿠하우스 #3층독채 #흑돼지 #용머리해안"
                                    description="제주시"
                                />
                                <Rate disabled defaultValue={2}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 켄고쿠마 B #독채 #자쿠지 #히노키 #TEA룸"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={3}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 도미니크 페로 A #독채 #수영장 #옥상정원"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/민박] 모랑모랑 스테이 #가족펜션 #전통돌집 #자쿠지 #바베큐"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={5}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/펜션] 통나무파크 호텔형 #숲속힐링 #알파카 #독채"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={0}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월한림/게하] 아는언니집 #여성전용 #전통돌집 #혼여 #바다"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="*13%할인*밴드 허클베리핀의 언플러그드 음악 여행 : 제주 2박3일"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={1}></Rate>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h1 style={{ textAlign: "left", fontSize: "30px" }}>자전거</h1>
                <div className="main_byc">
                    <Swiper

                        navigation
                        slidesPerView={4}
                    >
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[산방산/펜션] 쿠하우스 #3층독채 #흑돼지 #용머리해안"
                                    description="제주시"
                                />
                                <Rate disabled defaultValue={2}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 켄고쿠마 B #독채 #자쿠지 #히노키 #TEA룸"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={3}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 도미니크 페로 A #독채 #수영장 #옥상정원"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/민박] 모랑모랑 스테이 #가족펜션 #전통돌집 #자쿠지 #바베큐"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={5}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/펜션] 통나무파크 호텔형 #숲속힐링 #알파카 #독채"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={0}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월한림/게하] 아는언니집 #여성전용 #전통돌집 #혼여 #바다"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="*13%할인*밴드 허클베리핀의 언플러그드 음악 여행 : 제주 2박3일"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={1}></Rate>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h1 style={{ textAlign: "left", fontSize: "30px" }}>오토바이</h1>
                <div className="main_rent_moto">
                    <Swiper

                        navigation
                        slidesPerView={4}
                    >
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[산방산/펜션] 쿠하우스 #3층독채 #흑돼지 #용머리해안"
                                    description="제주시"
                                />
                                <Rate disabled defaultValue={2}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 켄고쿠마 B #독채 #자쿠지 #히노키 #TEA룸"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={3}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={slideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[중문/리조트] 롯데 아트빌라스 도미니크 페로 A #독채 #수영장 #옥상정원"
                                    description="중문"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/민박] 모랑모랑 스테이 #가족펜션 #전통돌집 #자쿠지 #바베큐"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={5}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월/펜션] 통나무파크 호텔형 #숲속힐링 #알파카 #독채"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={0}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="[애월한림/게하] 아는언니집 #여성전용 #전통돌집 #혼여 #바다"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={4}></Rate>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={SlideStyle}>
                            <Card
                                hoverable
                                style={{ width: 240, textAlign: 'center' }}
                                cover={<img style={{ height: "100px" }} src="logo192.png"></img>}
                            >
                                <Meta
                                    title="*13%할인*밴드 허클베리핀의 언플러그드 음악 여행 : 제주 2박3일"
                                    description="제주 애월"
                                />
                                <Rate disabled defaultValue={1}></Rate>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

Cus_Body.propTypes = {

}

export default Cus_Body

