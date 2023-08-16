import * as S from "./style";

import { useEffect } from "react";
import { Table, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getOrderListRequest } from "../../../../../redux/slicers/order.slice";

const OrderHistories = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderListRequest({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id]);

  const tableColumns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số lượng sản phẩm",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} products`,
    },

    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => `${totalPrice.toLocaleString()} VND`,
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Địa chỉ giao hàng",
      dataIndex: "address",
      key: "address",
      render: (_, item) =>
        `${item.address}, ${item.wardName}, ${item.districtName}, ${item.cityName}`,
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Table
          columns={tableColumns}
          dataSource={orderList.data}
          rowKey="id"
          pagination={false}
          expandable={{
            expandedRowRender: (record) => (
              <>
                {record.orderDetails.map((item) => (
                  <Row key={item.id}>
                    <S.StyleColWrapper span={5}>
                      <h3>Sản phẩm</h3>
                      <span>{item.name}</span>
                    </S.StyleColWrapper>
                    <S.StyleColWrapper span={5}>
                      <img src={item.image} alt="" width={70} height={70} />
                    </S.StyleColWrapper>
                    <S.StyleColWrapper span={5}>
                      <h3>Giá tiền</h3>
                      <span>{item.price.toLocaleString()} VNĐ</span>
                    </S.StyleColWrapper>
                    <S.StyleColWrapper span={5}>
                      <h3>Số Lượng </h3>
                      <span>{item.quantity}</span>
                    </S.StyleColWrapper>
                    <S.StyleColWrapper h3={5}>
                      <h3>Tổng</h3>
                      <span>
                        {(item.price * item.quantity).toLocaleString()} VNĐ
                      </span>
                    </S.StyleColWrapper>
                  </Row>
                ))}
              </>
            ),
          }}
        />
      </Col>
    </Row>
  );
};

export default OrderHistories;
