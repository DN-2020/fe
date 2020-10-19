import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Card, Rate } from 'antd'

import { useHistory } from 'react-router-dom'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const Cus_Body = (props) => {
  let history = useHistory()

  const { Meta } = Card
  const imageStyle = {
    verticalAlign: 'center',
    width: '100 %',
  }
  const SlideStyle = {
    marginLeft: '10px',
  }
  const options = {
    loop: true,
    slidesPerView: 1,
    autoplay: { AutoplayOptions: true },
    spaceBetween: 50,
    pagination: { clickable: true },
    style: { paddingBottom: '1%', border: '0.1px solid lightgray' },
  }
  const slideStyle = {
    height: '700',
    width: 300,
  }
  const contentOption = {}
  const handleProduct = (e) => {
    history.push(`/user/productDetail/${e}`)
  }
  const value = 1
  return (
    <div style={{ width: '80%', marginLeft: '10%', marginTop: '1%' }}>
      <div className="gyun_body_container">
        <div className="image_slide">
          <Swiper style={{ border: '1px solid lightgray' }} {...options} className="gyun_swiper">
            <SwiperSlide key={1} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
            <SwiperSlide key={2} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
            <SwiperSlide key={3} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
            <SwiperSlide key={4} style={slideStyle}>
              <img style={imageStyle} src="logo192.png"></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>렌트카</h1>
        <div className="main_rent_car" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Swiper slidesPerView={4} style={{ width: '900px', textAlign: 'left', margin: '0' }}>
            <SwiperSlide>
              <Card
                onClick={() => handleProduct(value)}
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="rent1.png"></img>}
              >
                <div>
                  <Meta title="[산방산/펜션]  #3층독채 #흑돼지 #용머리해안" description="제주시" />
                  <Rate disabled defaultValue={2}></Rate>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide style={slideStyle}>
              <Card
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="rent2.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="rent3.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="rent4.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>숙소</h1>
        <div className="main_rent_car" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Swiper slidesPerView={4} style={{ width: '900px', textAlign: 'left', margin: '0' }}>
            <SwiperSlide>
              <Card
                onClick={() => handleProduct(value)}
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="lodg1.png"></img>}
              >
                <div>
                  <Meta title="[산방산/펜션]  #3층독채 #흑돼지 #용머리해안" description="제주시" />
                  <Rate disabled defaultValue={2}></Rate>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide style={slideStyle}>
              <Card
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="lodg2.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="lodg3.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="lodg4.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>자전거</h1>
        <div className="main_rent_car" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Swiper slidesPerView={4} style={{ width: '900px', textAlign: 'left', margin: '0' }}>
            <SwiperSlide>
              <Card
                onClick={() => handleProduct(value)}
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="byc1.png"></img>}
              >
                <div>
                  <Meta title="[산방산/펜션]  #3층독채 #흑돼지 #용머리해안" description="제주시" />
                  <Rate disabled defaultValue={2}></Rate>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide style={slideStyle}>
              <Card
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="byc2.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img
                    style={{ height: '100px', objectFit: 'cover', objectFit: 'cover' }}
                    src="byc3.png"
                  ></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="byc4.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
      <div className="main_content" style={{ marginTop: '5%', height: '80%' }}>
        <h1 style={{ textAlign: 'left', width: '100%', fontSize: '30px' }}>오토바이</h1>
        <div className="main_rent_car" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Swiper slidesPerView={4} style={{ width: '900px', textAlign: 'left', margin: '0' }}>
            <SwiperSlide>
              <Card
                onClick={() => handleProduct(value)}
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="moto1.png"></img>}
              >
                <div>
                  <Meta title="[산방산/펜션]  #3층독채 #흑돼지 #용머리해안" description="제주시" />
                  <Rate disabled defaultValue={2}></Rate>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide style={slideStyle}>
              <Card
                hoverable
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="moto2.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="moto3.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={<img style={{ height: '100px', objectFit: 'cover' }} src="moto4.png"></img>}
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
                style={{ width: 200, height: 210 }}
                cover={
                  <img style={{ height: '100px', objectFit: 'cover' }} src="logo192.png"></img>
                }
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
    </div>
  )
}

Cus_Body.propTypes = {}

export default Cus_Body
