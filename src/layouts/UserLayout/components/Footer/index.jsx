import { Col, Row } from "antd";
import { BsFacebook, BsTiktok } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { ROUTES } from "../../../../constants/routers";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <Row>
        <Col lg={8} xs={24}>
          <S.StyleIframeWrapper
            src="https://www.youtube.com/embed/I3piKNJDhGE"
            title="25 mẫu thiết kế nội thất phòng khách đẹp hiện đại mới nhất 2018"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></S.StyleIframeWrapper>
        </Col>
        <Col lg={8} xs={24}>
          <S.ConnectWrapper>
            <S.TitleWrapper>
              <S.SpanStyleWrapper>VỀ CHÚNG TÔI</S.SpanStyleWrapper>
            </S.TitleWrapper>
            <S.AboutWrapper>
              <S.LinkWrapper to={ROUTES.USER.INTRODUCTION}>
                Trang chủ
              </S.LinkWrapper>
              <S.LinkWrapper to={ROUTES.USER.HOME}>Cửa hàng</S.LinkWrapper>
              <S.LinkWrapper to={ROUTES.USER.FORMADVISE}>Tư vấn</S.LinkWrapper>
            </S.AboutWrapper>
            <S.TitleWrapper>
              <S.SpanStyleWrapper>KẾT NỐI KHOA PHAM</S.SpanStyleWrapper>
            </S.TitleWrapper>
            <S.MediaWrapper>
              <S.LinkWrapper
                target={"_blank"}
                to="https://www.facebook.com/profile.php?id=100094360492141"
              >
                <BsFacebook fontSize={25} style={{ margin: "10px 20px" }} />
              </S.LinkWrapper>
              <S.LinkWrapper
                target={"_blank"}
                to="https://www.facebook.com/profile.php?id=100094360492141"
              >
                <AiFillInstagram
                  fontSize={25}
                  style={{ margin: "10px 20px" }}
                />
              </S.LinkWrapper>
              <S.LinkWrapper
                target={"_blank"}
                to="https://www.facebook.com/profile.php?id=100094360492141"
              >
                <BsTiktok fontSize={25} style={{ margin: "10px 20px" }} />
              </S.LinkWrapper>
            </S.MediaWrapper>
          </S.ConnectWrapper>
        </Col>
        <Col lg={8} xs={24}>
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
