import { Animated } from "react-animated-css";

import { Col, Collapse, Row } from "antd";
import { ListStep1 } from "../../../constants/constructions";
import { ListStep2 } from "../../../constants/constructions";
import { ListStep3 } from "../../../constants/constructions";

import * as S from "./style";
import { Fragment } from "react";
const Construction = () => {
  return (
    <Fragment>
      <Animated animateIn="animate__fadeInDown">
        <S.TitleProcessWrapper>
          Quy trình thiết kế hoàn thiện nội thất
        </S.TitleProcessWrapper>
      </Animated>
      <S.ProcessWrapper>
        <Row>
          <Col span={8}>
            <Animated animateIn="animate__fadeInLeft">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec" }}
                  items={ListStep1}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </Animated>
          </Col>
          <Col span={16}>
            <Animated animateIn="animate__fadeInRight">
              <S.ImageStep1Wrapper />
            </Animated>
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col span={16}>
            <Animated animateIn="animate__fadeInLeft">
              <S.ImageStep2Wrapper />
            </Animated>
          </Col>
          <Col span={8}>
            <Animated animateIn="animate__fadeInRight">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec" }}
                  items={ListStep2}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </Animated>
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col span={8}>
            <Animated animateIn="animate__fadeInLeft">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec" }}
                  items={ListStep3}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </Animated>
          </Col>
          <Col span={16}>
            <Animated animateIn="animate__fadeInRight">
              <S.ImageStep3Wrapper />
            </Animated>
          </Col>
        </Row>
      </S.ProcessWrapper>
    </Fragment>
  );
};
export default Construction;
