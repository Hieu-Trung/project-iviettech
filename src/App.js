import { Route, Routes, useLocation } from "react-router-dom";
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
import Profile from "./pages/user/Profile";
import Checkout from "./pages/user/Checkout";
import Cart from "./pages/user/Cart";
import { getUserInfoRequest } from "./redux/slicers/auth.slice";

function App() {
  const { pathname } = useLocation();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.INTRODUCTION} element={<Introduction />} />
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.FORMADVISE} element={<FormAdvise />} />
        <Route path={ROUTES.USER.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.USER.PROFILE} element={<Profile />} />
        <Route path={ROUTES.USER.CART} element={<Cart />} />
        <Route path={ROUTES.USER.CHECKOUT} element={<Checkout />} />
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
