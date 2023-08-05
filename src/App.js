import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

import Introduction from "./pages/Introduction";
import { ROUTES } from "./constants/routers";
import Home from "./pages/user/Home";
import UserLayout from "./layouts/UserLayout";
import Login from "./pages/Login";
import HeaderLogin from "./layouts/UserLayout/components/HeaderLogin";
import Register from "./pages/Register";
import FormAdvise from "./pages/user/FormAdvise";
import ProductDetail from "./pages/user/ProductDetail";
import UserInfo from "./pages/user/UserInfo";
import { getUserInfoRequest } from "./redux/slicers/auth.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const userTokenData = jwtDecode(accessToken);
      dispatch(
        getUserInfoRequest({
          id: parseInt(userTokenData.sub),
        })
      );
    }
  }, []);
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.INTRODUCTION} element={<Introduction />} />
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.FORMADVISE} element={<FormAdvise />} />
        <Route path={ROUTES.USER.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.USER.USER_INFO} element={<UserInfo />} />
      </Route>
      <Route element={<HeaderLogin />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
