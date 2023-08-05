import * as S from "./style";
import { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Animated } from "react-animated-css";

import { loginRequest } from "../../redux/slicers/auth.slice";
import { ROUTES } from "../../constants/routers"

const Login = () => {
  const [loginForm] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginData } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
  }, [loginData.error]);

  const handleSubmit = (values) => {
    dispatch(
      loginRequest({
        data: values,
        // callback để khi đăng ký thành công thì sẽ chuyển về dăng nhập
        callback: () => navigate(ROUTES.USER.HOME),
      })
    );
  };

  if (accessToken) return <Navigate to={ROUTES.USER.INTRODUCTION}/>
    return (
      <S.FormWrapper>
        <Animated animateIn="animate__zoomIn">
          <S.LoginFormWrapper>
            <S.TitleLoginWrapper>ĐĂNG NHẬP</S.TitleLoginWrapper>
            <Form
              form={loginForm}
              onFinish={(values) => handleSubmit(values)}
              layout="vertical"
              name="loginForm"
            >
              <Form.Item
                style={{ color: "#ffffff" }}
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Nhập email của bạn"
                  style={{
                    background: "rgba(128, 128, 128, 0.5)",
                    color: "#ffffff",
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Nhập mật khẩu"
                  style={{
                    background: "rgba(128, 128, 128, 0.5)",
                    color: "#ffffff",
                  }}
                />
              </Form.Item>
              <S.DetailWrapper>
                <S.RegisterAccountWrapper>
                  Chưa có tài khoản ! &nbsp;
                  <S.LinkWrapper to={ROUTES.REGISTER}>
                    Đăng ký ngay
                  </S.LinkWrapper>
                </S.RegisterAccountWrapper>
                <S.LinkWrapper>Quên mật khẩu</S.LinkWrapper>
              </S.DetailWrapper>
              <S.LoginWrapper>
                <S.BottomLoginWrapper>Đăng nhập</S.BottomLoginWrapper>
              </S.LoginWrapper>
            </Form>
          </S.LoginFormWrapper>
        </Animated>
      </S.FormWrapper>
    );
};
export default Login;
