import { Col, Row } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { ROUTES } from "../../../../constants/routers";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <Row>
        <Col span={10}>
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/I3piKNJDhGE"
            title="25 mẫu thiết kế nội thất phòng khách đẹp hiện đại mới nhất 2018"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: "15px" }}
          ></iframe>
        </Col>
        <Col span={7}>
          <S.ConnectWrapper>
            <S.TitleWrapper>
              <S.SpanStyleWrapper>VỀ CHÚNG TÔI</S.SpanStyleWrapper>
            </S.TitleWrapper>
            <S.AboutWrapper>
              <S.LinkWrapper to={ROUTES.USER.INTRODUCTION}>
                Trang chủ
              </S.LinkWrapper>
              <S.LinkWrapper to={ROUTES.USER.HOME}>Cửa hàng</S.LinkWrapper>
              <S.LinkWrapper to={ROUTES.USER.FORMCONSTRUCTION}>
                Tư vấn
              </S.LinkWrapper>

              <S.LinkWrapper>
                <MailOutlined /> Khoapham@gmail.com
                https://www.30secondsofcode.org/react/s/mailto/
              </S.LinkWrapper>
            </S.AboutWrapper>
          </S.ConnectWrapper>
        </Col>
        <Col span={7}>
          <S.ConnectWrapper>
            <S.TitleWrapper>
              <S.SpanStyleWrapper>NỘI THẤT KHOA PHẠM</S.SpanStyleWrapper>
            </S.TitleWrapper>
            <S.TitleAboutWrapper>
              <S.StyleBoldWrapper>KHOA PHẠM</S.StyleBoldWrapper> luôn mong muốn
              biến không gian sống trong ngôi nhà bạn thành một triển lãm, và đồ
              đạc trong phòng chính là những tác phẩm nghệ thuật được trưng bày
              ở đó.{" "}
              <S.StyleBoldWrapper>
                "MANG SỰ TINH TẾ VÀO KHÔNG GIAN SỐNG"
              </S.StyleBoldWrapper>{" "}
              - Đó chính là giá trị cốt lõi và mục đích tồn tại của
              <S.StyleBoldWrapper> NỘI THẤT KHOA PHẠM.</S.StyleBoldWrapper>
            </S.TitleAboutWrapper>
          </S.ConnectWrapper>
        </Col>
      </Row>
    </S.FooterWrapper>
  );
};
export default Footer;
