import * as S from "./style";

import { useSelector, useDispatch } from "react-redux";
import { Table, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

import { ROUTES } from "../../../constants/routers";
import {
  updateCartRequest,
  deleteCartRequest,
} from "../../../redux/slicers/cart.slice";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeQuantity = (productId, value) => {
    dispatch(
      updateCartRequest({
        productId: productId,
        value: value,
      })
    );
  };

  const handleDeleteCartItem = (productId) => {
    dispatch(deleteCartRequest({ productId: productId }));
  };

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tableColumn = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (_, item) => {
        return <img src={item.image} alt="" width={70} height={70} />;
      },
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      render: (_, item) => {
        return `${item.price.toLocaleString()} VNĐ`;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, item) => (
        <InputNumber
          value={item.quantity}
          min={1}
          onChange={(value) => handleChangeQuantity(item.productId, value)}
        />
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
      render: (_, item) =>
        `${(item.price * item.quantity).toLocaleString()} VNĐ`,
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <S.BottomLoginWrapper
          onClick={() => handleDeleteCartItem(item.productId)}
        >
          <AiFillDelete />
        </S.BottomLoginWrapper>
      ),
    },
  ];
  return (
    <S.CartListWrapper>
      <h2 style={{ marginBottom: 24 }}>Giỏ hàng</h2>

      <Table
        columns={tableColumn}
        dataSource={cartList}
        rowKey="id"
        pagination={false}
        bordered
      />
      <S.TotalPriceWrapper>
        <S.TotalPrice>
          <span>Tổng tiền: &nbsp;</span>
          {totalPrice.toLocaleString()} VNĐ
        </S.TotalPrice>
        <S.ButtonPayWrapper>
          <S.BottomPay
            disabled={cartList.length === 0}
            onClick={() => navigate(ROUTES.USER.CHECKOUT)}
          >
            Thanh Toán
          </S.BottomPay>
        </S.ButtonPayWrapper>
      </S.TotalPriceWrapper>
    </S.CartListWrapper>
  );
};

export default Cart;
