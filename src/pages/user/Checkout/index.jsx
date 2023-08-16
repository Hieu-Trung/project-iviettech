import * as S from "./style";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";

import {
  Form,
  Input,
  Select,
  Radio,
  Row,
  Col,
  Space,
  Table,
  Breadcrumb,
} from "antd";

import {
  getCityListRequest,
  getDistrictListRequest,
  getWardListRequest,
} from "../../../redux/slicers/location.slice";
import { orderProductRequest } from "../../../redux/slicers/order.slice";

import { ROUTES } from "../../../constants/routers";

const Checkout = () => {
  const [checkoutForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartList } = useSelector((state) => state.cart);
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const { userInfo } = useSelector((state) => state.auth);

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
    phoneNumber: userInfo.data.numberPhone,
  };

  const tableColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, item) => {
        return <img src={item.image} alt="" width={70} height={70} />;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_, item) =>
        `${(item.price * item.quantity).toLocaleString()} VND`,
    },
  ];

  useEffect(() => {
    dispatch(getCityListRequest());
  }, []);

  // check info user
  useEffect(() => {
    if (userInfo.data.id) {
      checkoutForm.resetFields();
    }
  }, [userInfo.data]);

  const handleSubmitCheckoutForm = (values) => {
    const totalPrice = cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const { cityCode, districtCode, wardCode } = values;
    const cityData = cityList.data.find((item) => item.code === cityCode);
    const districtData = districtList.data.find(
      (item) => item.code === districtCode
    );
    const wardData = wardList.data.find((item) => item.code === wardCode);
    dispatch(
      orderProductRequest({
        data: {
          ...values,
          cityName: cityData?.name,
          districtName: districtData?.name,
          wardName: wardData?.name,
          userId: userInfo.data.id,
          totalPrice: totalPrice,
          status: "pending",
        },
        products: cartList,
        callback: () => navigate(ROUTES.USER.HOME),
      })
    );
  };

  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data]);

  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);

  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <S.CheckoutWrapper>
      <Breadcrumb
        style={{ padding: "20px 0" }}
        items={[
          {
            title: (
              <Link to={ROUTES.USER.HOME}>
                <Space>
                  <AiFillHome />
                  <span>Trang chủ</span>
                </Space>
              </Link>
            ),
          },
          {
            title: (
              <Link to={ROUTES.USER.CART}>
                <Space>
                  <AiOutlineShoppingCart />
                  <span>Giỏ hàng</span>
                </Space>
              </Link>
            ),
          },
          {
            title: "Thủ tục thanh toán",
          },
        ]}
      />
      <h2>Thông tin thanh toán</h2>

      <Form
        name="checkoutForm"
        form={checkoutForm}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleSubmitCheckoutForm(values)}
      >
        <Row gutter={[16, 16]}>
          <Col sm={24} lg={12}>
            <S.StyleRowWrapper gutter={[16, 16]}>
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
                  <Input maxLength={10} />
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
                      dispatch(getDistrictListRequest({ cityCode: value }));
                      checkoutForm.setFieldsValue({
                        districtCode: undefined,
                        wardCode: undefined,
                      });
                    }}
                  >
                    {renderCityOptions}
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
                      dispatch(getWardListRequest({ districtCode: value }));
                      checkoutForm.setFieldsValue({
                        wardCode: undefined,
                      });
                    }}
                    disabled={!checkoutForm.getFieldValue("cityCode")}
                  >
                    {renderDistrictOptions}
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
                    disabled={!checkoutForm.getFieldValue("districtCode")}
                  >
                    {renderWardListOptions}
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
              <Col span={24}>
                <Form.Item
                  label="Phương thức thanh toán"
                  name="paymentMethod"
                  rules={[{ required: true, message: "Required!" }]}
                >
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value="Thanh toán khi nhận hàng">
                        Thanh toán khi nhận hàng
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </S.StyleRowWrapper>
          </Col>

          <Col sm={24} lg={12}>
            <S.StyleRowWrapper>
              <Table
                size="small"
                columns={tableColumn}
                dataSource={cartList}
                rowKey="id"
                pagination={false}
                scroll={{
                  y: 350,
                }}
              />
            </S.StyleRowWrapper>
            <S.TotalPrice>
              <span>Tổng tiền: &nbsp;</span>
              {totalPrice.toLocaleString()} VNĐ
            </S.TotalPrice>
            <Row>
              <S.StyleButtonWrapper>
                <S.BottomBackCart onClick={() => navigate(ROUTES.USER.CART)}>
                  Trở lại Cart
                </S.BottomBackCart>
                <S.BottomPay
                  disabled={cartList.length === 0}
                  onClick={() => navigate(ROUTES.USER.CHECKOUT)}
                >
                  Thanh Toán
                </S.BottomPay>
              </S.StyleButtonWrapper>
            </Row>
          </Col>
        </Row>
      </Form>
    </S.CheckoutWrapper>
  );
};
export default Checkout;
