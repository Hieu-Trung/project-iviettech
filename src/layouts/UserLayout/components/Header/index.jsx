import * as S from "./style";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import Logo from "../../../../image/logo.png";
import { ROUTES } from "../../../../constants/routers";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <S.HeaderWrapper>
      <S.StyleWrapper>
        <img src={Logo} alt="Logo" height={50} width={70} />
        <S.TitleCompanyWrapper>
          <S.CompanyWrapper>NỘI THẤT KHOA PHẠM</S.CompanyWrapper>
          <S.SloganCompanyWrapper>
            Tổ ấm của người tinh tế
          </S.SloganCompanyWrapper>
        </S.TitleCompanyWrapper>
      </S.StyleWrapper>
      <S.StyleWrapper>
        <S.AboutWrapper>
          <PhoneOutlined />
          <S.DetailAboutWrapper>
            <S.TitleWrapper>0903 545 910</S.TitleWrapper>
            <S.TitleWrapper>0911 455 001</S.TitleWrapper>
          </S.DetailAboutWrapper>
        </S.AboutWrapper>
        <S.AboutWrapper>
          <EnvironmentOutlined />
          <S.DetailAboutWrapper>
            <S.LinkWrapper to="http://surl.li/jijyr">
              <S.TitleWrapper>Trường sơn - Hòa Thọ Tây</S.TitleWrapper>
              <S.TitleWrapper>Cẩm Lệ - Đà Nẵng</S.TitleWrapper>
            </S.LinkWrapper>
          </S.DetailAboutWrapper>
        </S.AboutWrapper>
        <S.LoginWrapper>
          <UserOutlined />
          {userInfo.data.id ? (
            <S.TitleWrapper>{userInfo.data.fullName}</S.TitleWrapper>
          ) : (
            <S.TitleWrapper>
              <S.LinkWrapper to={ROUTES.LOGIN}>Đăng Nhập</S.LinkWrapper>
            </S.TitleWrapper>
          )}
        </S.LoginWrapper>
      </S.StyleWrapper>
    </S.HeaderWrapper>
  );
};
export default Header;
