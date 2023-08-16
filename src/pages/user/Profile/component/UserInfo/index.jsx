import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, DatePicker } from "antd";
import dayjs from "dayjs";

import { updateUserInfoRequest } from "../../../../../redux/slicers/auth.slice";

function UserInfo() {
  const [updateUserInfoForm] = Form.useForm();

  const { userInfo, updateUserInfoData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
    numberPhone: userInfo.data.numberPhone,
    birthday: dayjs(userInfo.data.birthday),
  };
  useEffect(() => {
    if (userInfo.data.id) {
      updateUserInfoForm.resetFields();
    }
  }, [userInfo.data]);

  const handleUpdateUserInfo = (values) => {
    dispatch(
      updateUserInfoRequest({
        id: userInfo.data.id,
        data: {
          ...values,
          birthday: dayjs(values.birthday).valueOf(),
        },
      })
    );
  };

  return (
    <Form
      form={updateUserInfoForm}
      name="updateUserInfoForm"
      initialValues={initialValues}
      layout="vertical"
      onFinish={(values) => handleUpdateUserInfo(values)}
      autoComplete="off"
    >
      <Form.Item
        label="Họ và tên"
        name="fullName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="numberPhone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ngày sinh"
        name="birthday"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        block
        loading={updateUserInfoData.load}
      >
        Cập nhật
      </Button>
    </Form>
  );
}

export default UserInfo;
