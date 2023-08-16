import * as S from "./style";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";

import { changePasswordRequest } from "../../../../../redux/slicers/auth.slice";

function ChangePassword() {
  const [changePasswordForm] = Form.useForm();

  const { userInfo, changePasswordData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (changePasswordData.error) {
      changePasswordForm.setFields([
        {
          name: "password",
          errors: ["Password is incorrect!"],
        },
      ]);
    }
  }, [changePasswordData.error]);

  const handleChangePassword = (values) => {
    dispatch(
      changePasswordRequest({
        id: userInfo.data.id,
        data: {
          email: userInfo.data.email,
          password: values.password,
          newPassword: values.newPassword,
        },
        callback: () => changePasswordForm.resetFields(),
      })
    );
  };

  return (
    <Form
      form={changePasswordForm}
      name="changePasswordForm"
      layout="vertical"
      onFinish={(values) => handleChangePassword(values)}
      autoComplete="off"
    >
      <Form.Item
        label="Mật khẩu cũ"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu của bạn!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Mật khẩu mới"
        name="newPassword"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu mới của bạn!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Xác nhận mật khẩu mới "
        name="confirmNewPassword"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập xác nhận mật khẩu mới của bạn!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Hai mật khẩu bạn đã nhập không khớp!Hai mật khẩu bạn đã nhập không khớp!"
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <S.BottomWrapper loading={changePasswordData.load}>
        Submit
      </S.BottomWrapper>
    </Form>
  );
}

export default ChangePassword;
