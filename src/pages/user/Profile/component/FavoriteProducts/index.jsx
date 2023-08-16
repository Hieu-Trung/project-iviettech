import * as S from "./style";

import { useEffect, useMemo } from "react";
import { generatePath } from "react-router-dom";
import { Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../../../../constants/routers";
import { getFavoriteListRequest } from "../../../../../redux/slicers/favorite.slice";

function FavoriteProducts() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { favoriteList } = useSelector((state) => state.favorite);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(
        getFavoriteListRequest({
          userId: userInfo.data.id,
        })
      );
    }
  }, [userInfo.data.id]);

  const renderProductList = useMemo(() => {
    return favoriteList.data.map((item) => {
      return (
        <Col key={item.id} xs={12} xl={8}>
          <S.LinkWrapper
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: item.product.id,
            })}
          >
            <S.LikeProductWrapper>
              <img src={item.product.image} alt="" width={70} height={70} />
              <S.DetailProduct>
                <h3>{item.product.name}</h3>
                <p>Giá: {item.product.price.toLocaleString()} VND</p>
              </S.DetailProduct>
            </S.LikeProductWrapper>
          </S.LinkWrapper>
        </Col>
      );
    });
  }, [favoriteList.data]);

  return (
    <Spin spinning={favoriteList.loading}>
      <Row gutter={[16, 16]}>{renderProductList}</Row>
    </Spin>
  );
}

export default FavoriteProducts;
