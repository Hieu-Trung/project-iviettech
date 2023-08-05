import * as S from "./style";
import { getProductDetailRequest } from "../../../redux/slicers/product.slice";
import {
  createReviewRequest,
  getReviewListRequest,
} from "../../../redux/slicers/review.slice";

import { useParams } from "react-router-dom";
import { Col, Input, Button, Form, Rate } from "antd";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [reviewForm] = Form.useForm();
  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(getProductDetailRequest({ id: parseInt(id) }));
    dispatch(getReviewListRequest({ productId: parseInt(id) }));
  }, []);

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

  return (
    <>
      <S.productDetailWrapper>
        <Col span={10}>
          <img alt="" width="100%" max-height="auto" />
        </Col>
        <Col flex={1} span={14}>
          <p>{productDetail.data.name}</p>
          <Rate value={averageRate} allowHalf disabled></Rate>
          <span>{`(${averageRate})`}</span>
          <p>{productDetail.data.price?.toLocaleString()} VNĐ</p>
          <p>{productDetail.data.category?.name}</p>
          <Input type="number"></Input>
          <Button>Tem gio</Button>
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
