import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { Fragment } from "react";
import { Col, Row } from "antd";

import * as S from "./style";
import Construction from "../user/Construction";

import Slide1 from "../../image/slide/slide1.jpg";
import Slide2 from "../../image/slide/slide2.jpg";
import Slide3 from "../../image/slide/slide3.jpg";
import Slide4 from "../../image/slide/slide4.jpg";
import Slide5 from "../../image/slide/slide5.jpg";
import About from "../../image/About.jpg";

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
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
          <img src={Slide3} alt="" />
          <img src={Slide4} alt="" />
          <img src={Slide5} alt="" />
        </Slider>
      </S.SlideWrapper>
      <Row>
        <S.TitleWrapper>
          Nếu bạn cho chúng tôi 1% sự tin tưởng, chúng tôi sẽ cho bạn 99% sự hài
          lòng!...
        </S.TitleWrapper>
      </Row>
      <Row>
        <S.TitleAboutWrapper>VỀ CHÚNG TÔI </S.TitleAboutWrapper>
      </Row>
      <S.AboutDetailWrapper>
        <Row>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img src={About} alt="" />
            </AnimationOnScroll>
          </Col>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <S.TitleDetailAboutWrapper>
                Với kinh nghiệm về thiết kế hơn 15 năm trong thiết kế và hoàn
                thiện nội thất cùng đội ngũ thiết kế chuyên nghiệp,{" "}
                <strong>Nội Thât Khoa Phạm</strong>
                mang đến giải pháp toàn diện trong nội thất!...
              </S.TitleDetailAboutWrapper>
            </AnimationOnScroll>
          </Col>
        </Row>
      </S.AboutDetailWrapper>
      <Construction />
    </Fragment>
  );
};
export default Introduction;
