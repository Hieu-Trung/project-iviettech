import * as S from "./style";
import { Fragment } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Col, Collapse, Row } from "antd";

import { ListStep1 } from "../../../constants/constructions";
import { ListStep2 } from "../../../constants/constructions";
import { ListStep3 } from "../../../constants/constructions";

import ImgStep1 from "../../../image/stepConstruction/imgStep1.jpg";
import ImgStep2 from "../../../image/stepConstruction/imgStep2.jpg";
import ImgStep3 from "../../../image/stepConstruction/imgStep3.jpg";

const Construction = () => {
  return (
    <Fragment>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <S.TitleProcessWrapper>
          Quy trình thiết kế hoàn thiện nội thất
        </S.TitleProcessWrapper>
      </AnimationOnScroll>
      <S.ProcessWrapper>
        <Row>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec", margin: "10px 0" }}
                  items={ListStep1}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </AnimationOnScroll>
          </Col>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__zoomIn">
              <img src={ImgStep1} alt="" />
            </AnimationOnScroll>
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <S.StyleColWrapper>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__zoomIn">
              <img src={ImgStep2} alt="" />
            </AnimationOnScroll>
          </Col>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec", margin: "10px 0" }}
                  items={ListStep2}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </AnimationOnScroll>
          </Col>
        </S.StyleColWrapper>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec", margin: "10px 0" }}
                  items={ListStep3}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </AnimationOnScroll>
          </Col>
          <Col xs={24} lg={12}>
            <AnimationOnScroll animateIn="animate__zoomIn">
              <img src={ImgStep3} alt="" />
            </AnimationOnScroll>
          </Col>
        </Row>
      </S.ProcessWrapper>
    </Fragment>
  );
};
export default Construction;
