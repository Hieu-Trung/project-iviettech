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
import { Col, Input, Button, Form, Rate, notification, message } from "antd";
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
  const [messageApi, contextHolder] = message.useMessage();

  const AddToCardSuccess = () => {
    messageApi.open({
      type: "success",
      content: "Thêm vào giỏ hàng thành công",
    });
  };
  const renderReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
      return (
        <S.ListReviewWrapper key={item.id}>
          <S.StyleDiv></S.StyleDiv>
          <S.TitleReviewProduct>
            <h3>{item.user.fullName}</h3>
            <span>{moment(item.createdAt).fromNow()}</span>
          </S.TitleReviewProduct>
          <span>
            Số sao: <Rate value={item.rate} disabled />
          </span>

          <p>Nội dung: {item.comment}</p>
        </S.ListReviewWrapper>
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
          image: productDetail.data.image,
          productId: productDetail.data.id,
          name: productDetail.data.name,
          price: productDetail.data.price,
          quantity: quantity,
        },
      })
    );
    AddToCardSuccess();
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

  const renderReviewForm = useMemo(() => {
    if (userInfo.data.id) {
      const isReviewed = reviewList.data.some(
        (item) => item.userId === userInfo.data.id
      );
      if (isReviewed) {
        return <h2>Bạn đã đánh giá sản phẩm này</h2>;
      }
      return (
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
          <S.StyleButton>
            <S.BottomLoginWrapper>Đánh giá</S.BottomLoginWrapper>
          </S.StyleButton>
        </Form>
      );
    }
    return <h2>Bạn cần đăng nhập để đánh giá sản phẩm</h2>;
  }, [userInfo.data, reviewList.data]);

  return (
    <S.ProductDetail>
      {contextHolder}
      <S.ProductDetailWrapper>
        <Col span={10}>
          <S.ImageProductWrapper src={productDetail.data.image} alt="" />
        </Col>
        <S.StyleColWrapper span={14}>
          <h3>Tên sản phẩm: {productDetail.data.name}</h3>
          <S.DetailProductWrapper>
            <Col lg={12} md={12} sm={24} xs={24}>
              <S.StyleRateWrapper
                value={averageRate}
                allowHalf
                disabled
              ></S.StyleRateWrapper>
              <S.TotalRate>{`(${averageRate})`}</S.TotalRate>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <S.DetailProductWrapper>
                <Button
                  size="large"
                  type="text"
                  danger={isFavorite}
                  icon={
                    isFavorite ? (
                      <HeartFilled style={{ fontSize: 20 }} />
                    ) : (
                      <HeartOutlined
                        style={{ fontSize: 20, color: "#414141" }}
                      />
                    )
                  }
                  onClick={() => handleToggleFavorite()}
                ></Button>
                {productDetail.data?.favorites?.length || 0} Lượt thích
              </S.DetailProductWrapper>
            </Col>
          </S.DetailProductWrapper>

          <S.priceProductWrapper>
            <S.PriceWrapper span={12}>
              <S.PriceOldWrapper>
                Giá: {productDetail.data.price?.toLocaleString()} VNĐ
              </S.PriceOldWrapper>
              <S.PriceSaleWrapper>
                Sale: {productDetail.data.salePrice?.toLocaleString()} VNĐ
              </S.PriceSaleWrapper>
            </S.PriceWrapper>
            <S.PriceWrapper span={12}>
              <S.PricePercentrapper>
                {(
                  ((productDetail.data.price - productDetail.data.salePrice) /
                    productDetail.data.price) *
                  100
                ).toFixed()}
              </S.PricePercentrapper>
            </S.PriceWrapper>
          </S.priceProductWrapper>

          <S.StyleInputNumberWrapper
            value={quantity}
            onChange={(value) => setQuantity(value)}
            min={1}
          />

          <S.BottomLoginWrapper onClick={() => handleAddToCart()}>
            Thêm vào giỏ
          </S.BottomLoginWrapper>
        </S.StyleColWrapper>
      </S.ProductDetailWrapper>
      <S.Review>
        {renderReviewForm}

        {renderReviewList}
      </S.Review>
    </S.ProductDetail>
  );
};

export default ProductDetail;
