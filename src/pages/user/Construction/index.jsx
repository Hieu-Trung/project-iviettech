import * as S from "./style";
import { Fragment } from "react";

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
      <S.TitleProcessWrapper>
        Quy trình thiết kế hoàn thiện nội thất
      </S.TitleProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col xs={24} lg={12}>
            <S.StepProcessWrapper>
              <Collapse
                style={{ backgroundColor: "#ececec" }}
                items={ListStep1}
                bordered={false}
              />
            </S.StepProcessWrapper>
          </Col>
          <Col
            xs={24}
            lg={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={ImgStep1} alt="" />
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col
            xs={24}
            lg={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={ImgStep2} alt="" />
          </Col>
          <Col xs={24} lg={12}>
            <S.StepProcessWrapper>
              <Collapse
                style={{ backgroundColor: "#ececec" }}
                items={ListStep2}
                bordered={false}
              />
            </S.StepProcessWrapper>
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col xs={24} lg={12}>
            <S.StepProcessWrapper>
              <Collapse
                style={{ backgroundColor: "#ececec" }}
                items={ListStep3}
                bordered={false}
              />
            </S.StepProcessWrapper>
          </Col>
          <Col
            xs={24}
            lg={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={ImgStep3} alt="" />
          </Col>
        </Row>
      </S.ProcessWrapper>
    </Fragment>
  );
};
export default Construction;
