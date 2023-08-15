import * as S from "./style";
import { getProductDetailRequest } from "../../../redux/slicers/product.slice";
import { addToCartRequest } from "../../../redux/slicers/cart.slice";
import {
  createReviewRequest,
  getReviewListRequest,
} from "../../../redux/slicers/review.slice";
import {
  favoriteProductRequest,
  unFavoriteProductRequest,
} from "../../../redux/slicers/favorite.slice";

import { useParams } from "react-router-dom";
import {
  Col,
  Input,
  InputNumber,
  Button,
  Form,
  Rate,
  notification,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [reviewForm] = Form.useForm();
  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.review);

  const renderReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
      return (
        <div key={item.id}>
          <h2>{item.user.fullName}</h2>
          <span>{moment(item.createdAt).fromNow()}</span>
          <Rate value={item.rate} disabled></Rate>
          <p>{item.comment}</p>
        </div>
      );
    });
  }, [reviewList.data]);

  const handleReviewProduct = (values) => {
    dispatch(
      createReviewRequest({
        data: {
          ...values,
          userId: userInfo.data.id,
          productId: productDetail.data.id,
        },
        callback: () => reviewForm.resetFields(),
      })
    );
  };

  const averageRate = useMemo(
    () =>
      reviewList.data.length
        ? (
            reviewList.data.reduce((total, item) => total + item.rate, 0) /
            reviewList.data.length
          ).toFixed(1)
        : 0,
    [reviewList.data]
  );

  const isFavorite = useMemo(
    () =>
      productDetail.data.favorites?.some(
        // nếu thỏa điều kiện trả về true. k thì là false
        (item) => item.userId === userInfo.data.id
      ),
    [productDetail.data.favorites, userInfo.data.id]
  );

  useEffect(() => {
    dispatch(getProductDetailRequest({ id: parseInt(id) }));
    dispatch(getReviewListRequest({ productId: parseInt(id) }));
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addToCartRequest({
        data: {
          //ảnh
          productId: productDetail.data.id,
          name: productDetail.data.name,
          price: productDetail.data.price,
          quantity: quantity,
        },
      })
    );
    notification.success({ message: "Bỏ vào giỏ thành công" });
  };

  const handleToggleFavorite = () => {
    if (userInfo.data.id) {
      // nếu đã có isFavorite
      if (isFavorite) {
        const favoriteData = productDetail.data.favorites?.find(
          (item) => item.userId === userInfo.data.id
        );
        dispatch(
          unFavoriteProductRequest({
            id: favoriteData.id,
          })
        );
      } else {
        //nếu chưa có isFavorite
        dispatch(
          favoriteProductRequest({
            productId: productDetail.data.id,
            userId: userInfo.data.id,
          })
        );
      }
    } else {
      notification.error({
        message: "Vui lòng đăng nhập để thực hiện chức năng này!",
      });
    }
  };

  return (
    <>
      <S.productDetailWrapper>
        <Col span={10}>
          <img
            src={productDetail.data.image}
            alt=""
            width="90%"
            max-height="100px"
          />
        </Col>
        <Col
          flex={1}
          span={14}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>{productDetail.data.name}</p>
          <Rate value={averageRate} allowHalf disabled></Rate>
          <span>{`(${averageRate})`}</span>
          <p>{productDetail.data.price?.toLocaleString()} VNĐ</p>
          <p>{productDetail.data.category?.name}</p>
          <InputNumber
            value={quantity}
            onChange={(value) => setQuantity(value)}
            min={1}
          ></InputNumber>
          <Button onClick={() => handleAddToCart()}>Tem gio</Button>
          <Button
            size="large"
            type="text"
            danger={isFavorite}
            icon={
              isFavorite ? (
                <HeartFilled style={{ fontSize: 24 }} />
              ) : (
                <HeartOutlined style={{ fontSize: 24, color: "#414141" }} />
              )
            }
            onClick={() => handleToggleFavorite()}
          ></Button>
          {productDetail.data?.favorites?.length || 0} Lượt thích
        </Col>
      </S.productDetailWrapper>
      {userInfo.data.id && (
        <div>
          <Form
            form={reviewForm}
            onFinish={(values) => handleReviewProduct(values)}
            layout="vertical"
            name="commentForm"
            initialValues={{
              rate: 0,
              comment: "",
            }}
          >
            <Form.Item
              label="Đánh giá sao"
              name="rate"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn đánh giá sao",
                },
              ]}
            >
              <Rate />
            </Form.Item>
            <Form.Item
              label="Nhận xét "
              name="comment"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập nội dung đánh giá",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <S.BottomLoginWrapper>Danh gia</S.BottomLoginWrapper>
            {renderReviewList}
          </Form>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
