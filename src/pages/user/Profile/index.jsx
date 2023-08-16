import * as S from "./style";

import { Navigate } from "react-router-dom";
import { Tabs, Card } from "antd";
import { useSelector } from "react-redux";

import UserInfo from "./component/UserInfo";
import OrderHistories from "./component/OrderHistories";
import FavoriteProducts from "./component/FavoriteProducts";
import ChangePassword from "./component/ChangePassword";
import { ROUTES } from "../../../constants/routers";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);

  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && userInfo.loading) {
    return <div>Loading...</div>;
  } else if (!userInfo.data.id) {
    return <Navigate to={ROUTES.USER.HOME} />;
  }
  return (
    <S.ProfileWrapper>
      <Card bordered={false} size="small">
        <Tabs
          bordered={false}
          type="card"
          tabPosition="left"
          items={[
            {
              label: "Thông tin cá nhân",
              key: 1,
              children: <UserInfo />,
            },
            {
              label: "Lịch sử mua hàng",
              key: 2,
              children: <OrderHistories />,
            },
            {
              label: "Sản phẩm yêu thích",
              key: 3,
              children: <FavoriteProducts />,
            },
            {
              label: "Đổi mật khẩu",
              key: 4,
              children: <ChangePassword />,
            },
          ]}
        />
      </Card>
    </S.ProfileWrapper>
  );
}

export default Profile;
