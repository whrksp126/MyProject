import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const settings = {
    arrows: false,
    infinity: true,
    slidesToShow:1,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    speed: 1000,
  };
  
  const Container = styled.div`
    /* background-color: red; */
    height: 686px;

  `;
  
  // 슬라이드 CSS

  const CardBox = styled.div`
    /* cursor: pointer; */
  `;
  
  const CardImg = styled.img`
    width: 686px;
    height: 686px;
    border-radius: 24px;
    padding: 0 14px;
    float: left;
    overflow: hidden;
    position: relative;
  `;


  return (

    <Container >
      <Slider {...settings}>
            <CardBox>
              <CardImg alt="인기 서비스" src="https://mblogthumb-phinf.pstatic.net/MjAxODExMjZfMzQg/MDAxNTQzMjA3NDk2NjUy.EFQs7Inm87VrY4XKxlC-G7zfVC0glVl1NbLuBhAARDwg.9y4Eg3ilQVm730HwDe2E3qe4YRw1mqHWzDr_6Qu_vlIg.JPEG.wltnsdl12/image_2827329711543207419475.jpg?type=w800" />
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="http://image.yes24.com/images/chyes24/f/4/0/c/f40ce6bd11c8734328ad168cbc385579.jpg"/>
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="http://www.joseilbo.com/gisa_img/1397467528.jpg" />
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="https://www.xecond.co.kr/_d1/img/mainslide/04.jpg" />
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WL0IOdWkJq5wKZAXa0P6e8bmNqD7r4P_AQ&usqp=CAU" />
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="https://www.melodystyle.co.kr/m/img/brand/br_logo_05.png" />
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="https://media.bunjang.co.kr/product/122507797_1_1619040872_w360.jpg" />
            </CardBox>
            <CardBox>
              <CardImg alt="인기 서비스" src="https://lh3.googleusercontent.com/proxy/pbXlAdgKEP19wjKpYwsN4_qnt86NICJHKEWYKc6_bP7-O61DAIAYWqHAhvCZYZL_zMZMyVMCgUkiVIq8GmqIoA8mcHQT4sCosKRxpvATadbznNRbkAUu01ur" />
            </CardBox>
      </Slider>
    </Container>
  )
}

export default ImageSlider


