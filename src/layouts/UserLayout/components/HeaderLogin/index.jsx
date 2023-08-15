import { Col, Row } from "antd";
import Logo from "../../../../image/logo.png";
import { ROUTES } from "../../../../constants/routers";
import * as S from "./style";
import { Outlet } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <S.StyleLoginWrapper>
      <Row
        style={{
          opacity: "5",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          background: "rgba(128, 128, 128, 0.5)",
          height: "60px",
          width: "100%",
        }}
      >
        <Col span={12} style={{ textAlign: "start" }}>
          <S.StyleWrapper>
            <S.ImageWrapper src={Logo} alt="Logo" />
            <S.TitleCompanyWrapper>
              <S.CompanyWrapper>NỘI THẤT KHOA PHẠM</S.CompanyWrapper>
              <S.SloganCompanyWrapper>
                Tổ ấm của người tinh tế
              </S.SloganCompanyWrapper>
            </S.TitleCompanyWrapper>
          </S.StyleWrapper>
          <S.StyleWrapper></S.StyleWrapper>
        </Col>
        <Col span={12} style={{ textAlign: "end" }}>
          <S.LinkWrapper to={ROUTES.USER.INTRODUCTION}>
            <S.AboutCompanyWrapper>Về Chúng Tôi</S.AboutCompanyWrapper>
          </S.LinkWrapper>
        </Col>
      </Row>
      <Outlet />
    </S.StyleLoginWrapper>
  );
};
export default HeaderLogin;
