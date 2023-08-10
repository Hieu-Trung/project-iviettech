import * as S from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Form,
  Button,
  Input,
  Select,
  Radio,
  Row,
  Col,
  Card,
  Space,
  Table,
} from "antd";

const Checkout = () => {
  const [checkoutForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
    phoneNumber: userInfo.data.numberPhone,
  };
  console.log(initialValues);

  useEffect(() => {
    if (userInfo.data.id) {
      checkoutForm.resetFields();
    }
  }, [userInfo.data]);

  return (
    <S.CheckoutWrapper>
      <h2 style={{ marginBottom: 24 }}>Thủ tục thanh toán</h2>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <Form
            name="checkoutForm"
            form={checkoutForm}
            layout="vertical"
            initialValues={initialValues}
            //   onFinish={(values) => handleSubmitCheckoutForm(values)}
          >
            <Card
              size="small"
              title="Thông tin giao hàng"
              style={{ marginBottom: 24 }}
            >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Form.Item
                    label="Họ và tên"
                    name="fullName"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Số điện thoại"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Tỉnh/Thành"
                    name="cityCode"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Select
                      onChange={(value) => {
                        //   dispatch(getDistrictListRequest({ cityCode: value }));
                        //   checkoutForm.setFieldsValue({
                        //     districtCode: undefined,
                        //     wardCode: undefined,
                        //   });
                      }}
                    >
                      {/* {renderCityOptions} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Quận/Huyện"
                    name="districtCode"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Select
                      onChange={(value) => {
                        //   dispatch(getWardListRequest({ districtCode: value }));
                        //   checkoutForm.setFieldsValue({
                        //     wardCode: undefined,
                        //   });
                      }}
                      // disabled={!checkoutForm.getFieldValue("cityCode")}
                    >
                      {/* {renderDistrictOptions} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Phường/Xã"
                    name="wardCode"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Select
                    // disabled={!checkoutForm.getFieldValue("districtCode")}
                    >
                      {/* {renderWardListOptions} */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card
              size="small"
              title="Thông tin thanh toán"
              style={{ marginBottom: 24 }}
            >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Form.Item
                    label="Phương thức thanh toán"
                    name="paymentMethod"
                    rules={[{ required: true, message: "Required!" }]}
                  >
                    <Radio.Group>
                      <Space direction="vertical">
                        <Radio value="cod">COD</Radio>
                        <Radio value="atm">ATM</Radio>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Row justify="space-between">
              <Button>Trở lại</Button>
              <Button type="primary" htmlType="submit">
                Thanh toán
              </Button>
            </Row>
          </Form>
        </Col>
        <Col span={10}>
          <Card size="small" title="Giỏ hàng" style={{ marginBottom: 24 }}>
            <Table
              size="small"
              // columns={tableColumn}
              // dataSource={cartList}
              rowKey="id"
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </S.CheckoutWrapper>
  );
};
export default Checkout;
