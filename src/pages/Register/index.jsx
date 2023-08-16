import * as S from "./style";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { registerRequest } from "../../redux/slicers/auth.slice";
import { ROUTES } from "../../constants/routers";

const Register = () => {
  const [registerForm] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (registerData.error) {
      registerForm.setFields([
        {
          name: "email",
          errors: [registerData.error],
        },
      ]);
    }
  }, [registerData.error]);
  const handleSubmit = (values) => {
    dispatch(
      registerRequest({
        data: {
          fullName: values.fullName,
          numberPhone: values.numberPhone,
          email: values.email,
          password: values.password,
        },
        // callback để khi đăng ký thành công thì sẽ chuyển về dăng nhập
        callback: () => navigate(ROUTES.LOGIN),
      })
    );
  };
  return (
    <S.FormWrapper>
      <S.LoginFormWrapper>
        <S.TitleLoginWrapper>ĐĂNG KÝ</S.TitleLoginWrapper>
        <Form
          form={registerForm}
          layout="vertical"
          name="registerForm"
          onFinish={(values) => handleSubmit(values)}
        >
          <Form.Item
            style={{ color: "#ffffff" }}
            label="Tên tài khoản"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên của bạn",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nhập tên của bạn"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
          <Form.Item
            style={{ color: "#ffffff" }}
            label="Số điện thoại"
            name="numberPhone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
            ]}
          >
            <Input
              maxLength={10}
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Nhập số điện thoại"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
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
              {
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/g,
                message: "Mật khẩu chưa đủ mạnh",
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
          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu ",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Xác nhận mật khẩu không khớp")
                  );
                },
              }),
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
              Đã có tài khoản ! &nbsp;
              <S.LinkWrapper to={ROUTES.LOGIN}>Đăng Nhập</S.LinkWrapper>
            </S.RegisterAccountWrapper>
          </S.DetailWrapper>
          <S.LoginWrapper>
            <S.BottomLoginWrapper>Đăng Ký</S.BottomLoginWrapper>
          </S.LoginWrapper>
        </Form>
      </S.LoginFormWrapper>
    </S.FormWrapper>
  );
};
export default Register;
