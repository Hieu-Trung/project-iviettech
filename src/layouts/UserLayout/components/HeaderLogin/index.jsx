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
          height: '60px'
        }}
      >
        <Col span={20} style={{ textAlign: "start" }}>
          <S.StyleWrapper>
            <img src={Logo} alt="Logo" height={50} width={70} />
            <S.TitleCompanyWrapper>
              <S.CompanyWrapper>NỘI THẤT KHOA PHẠM</S.CompanyWrapper>
              <S.SloganCompanyWrapper>
                Tổ ấm của người tinh tế
              </S.SloganCompanyWrapper>
            </S.TitleCompanyWrapper>
          </S.StyleWrapper>
          <S.StyleWrapper></S.StyleWrapper>
        </Col>
        <Col span={4} style={{ textAlign: "end" }}>
          <S.AboutCompanyWrapper>
            <S.LinkWrapper to={ROUTES.USER.INTRODUCTION}>
              Về Chúng Tôi
            </S.LinkWrapper>
          </S.AboutCompanyWrapper>
        </Col>
      </Row>
      <Outlet/>
    </S.StyleLoginWrapper>
  );
};
export default HeaderLogin;
