import * as S from "./style";

import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Row, Badge } from "antd";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import Logo from "../../../../image/logo.png";
import { ROUTES } from "../../../../constants/routers";
import { logoutRequest } from "../../../../redux/slicers/auth.slice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Row>
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
          <S.CartWrapper>
            <S.LinkWrapper to={ROUTES.USER.CART}>
              <Badge count={cartList.length}>
                <BsFillCartCheckFill />
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
                    },
                    {
                      key: 2,
                      label: "Đăng xuất",
                      onClick: () => dispatch(logoutRequest()),
                    },
                  ],
                }}
              >
                <S.TitleWrapper>
                  <S.LinkWrapper to={ROUTES.USER.USER_INFO}>
                    {userInfo.data.fullName}
                  </S.LinkWrapper>
                </S.TitleWrapper>
              </Dropdown>
            ) : (
              <S.TitleWrapper>
                <S.LinkWrapper to={ROUTES.LOGIN}>Đăng Nhập</S.LinkWrapper>
              </S.TitleWrapper>
            )}
          </S.LoginWrapper>
        </S.StyleWrapper>
      </S.HeaderWrapper>
    </Row>
  );
};
export default Header;
