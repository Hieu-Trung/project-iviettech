import * as S from "./style";

import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Badge } from "antd";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiStore } from "react-icons/bi";

import Logo from "../../../../image/logo.png";
import { ROUTES } from "../../../../constants/routers";
import { logoutRequest } from "../../../../redux/slicers/auth.slice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <S.HeaderWrapper>
      <S.LinkWrapper to={ROUTES.USER.INTRODUCTION}>
        <S.StyleWrapper>
          <S.ImageWrapper src={Logo} alt="Logo" />
          <S.TitleCompanyWrapper>
            <S.CompanyWrapper>NỘI THẤT KHOA PHẠM</S.CompanyWrapper>
            <S.SloganCompanyWrapper>
              Tổ ấm của người tinh tế
            </S.SloganCompanyWrapper>
          </S.TitleCompanyWrapper>
        </S.StyleWrapper>
      </S.LinkWrapper>
      <S.StyleWrapper>
        <S.LinkWrapper to={ROUTES.USER.HOME}>
          <S.LoginWrapper>
            <BiStore />
            <S.TitleWrapper>Cửa hàng</S.TitleWrapper>
          </S.LoginWrapper>
        </S.LinkWrapper>

        <S.CartWrapper>
          <S.LinkWrapper to={ROUTES.USER.CART}>
            <Badge count={cartList.length}>
              <BsFillCartCheckFill color="#ffffff" />
            </Badge>
          </S.LinkWrapper>
        </S.CartWrapper>

        <S.LoginWrapper>
          <AiOutlineUser />
          {userInfo.data.id ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 1,
                    label: "Thông tin cá nhân",
                    onClick: () => navigate(ROUTES.USER.PROFILE),
                  },
                  {
                    key: 2,
                    label: "Đăng xuất",
                    onClick: () => dispatch(logoutRequest()),
                  },
                ],
              }}
            >
              <S.TitleWrapper>{userInfo.data.fullName}</S.TitleWrapper>
            </Dropdown>
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
