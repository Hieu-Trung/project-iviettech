import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Animated } from "react-animated-css";
import { Fragment } from "react";


import * as S from "./style";
import Construction from "../user/Construction";

const Introduction = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <Fragment>
      <S.SlideWrapper>
        <Slider {...settings}>
          <S.ImageSlide1Wrapper />
          <S.ImageSlide2Wrapper />
          <S.ImageSlide3Wrapper />
          <S.ImageSlide4Wrapper />
          <S.ImageSlide5Wrapper />
        </Slider>
      </S.SlideWrapper>
      <S.TitleWrapper>
        Nếu bạn cho chúng tôi 1% sự tin tưởng, chúng tôi sẽ cho bạn 99% sự hài
        lòng!...
      </S.TitleWrapper>
      <Animated animationIn="fadeInDown" isVisible={true}>
        <S.TitleAboutWrapper>VỀ CHÚNG TÔI 1</S.TitleAboutWrapper>
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
      </Animated>
      <S.AboutDetailWrapper>
        <Animated animateIn="animate__fadeInLeft">
          <S.ImageAboutWrapper />
        </Animated>
        <S.TitleDetailAboutWrapper>
          <Animated animateIn="animate__fadeInRight">
            Với kinh nghiệm về thiết kế hơn 15 năm trong thiết kế và hoàn thiện
            nội thất cùng đội ngũ thiết kế chuyên nghiệp,{" "}
            <strong>Nội Thât Khoa Phạm</strong>
            mang đến giải pháp toàn diện trong nội thất!...
          </Animated>
        </S.TitleDetailAboutWrapper>
      </S.AboutDetailWrapper>
      <Construction />
    </Fragment>
  );
};
export default Introduction;
