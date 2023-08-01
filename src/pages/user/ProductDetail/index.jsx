import * as S from "./style";
import { getProductDetailRequest } from "../../../redux/slicers/product.slice";

import { useParams } from "react-router-dom";
import { Col, Input, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetailRequest({ id: parseInt(id) }));
  }, []);
  return (
    <S.productDetailWrapper>
      <Col span={10}>
        <img alt="" width="100%" max-height="auto" />
      </Col>
      <Col flex={1} span={14}>
        <p>{productDetail.data.name}</p>
        <p>{productDetail.data.price?.toLocaleString()} VNĐ</p>
        <p>{productDetail.data.category?.name}</p>
        <Input type="number"></Input>
        <Button>Tem gio</Button>
      </Col>
    </S.productDetailWrapper>
  );
};

export default ProductDetail;
