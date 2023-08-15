import * as S from "./style";

import Shipped from "../../../image/shipped.jpg";
import Maintenance from "../../../image/maintenance.jpg";
import { PRODUCT_LIMIT } from "../../../constants/pagning";
import { getProductListRequest } from "../../../redux/slicers/product.slice";
import { getCategoryListRequest } from "../../../redux/slicers/category.slice";
import { setFilterParams } from "../../../redux/slicers/common.slice";
import { ROUTES } from "../../../constants/routers";
import qs from "qs";

import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useMemo } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { Col, Row, Checkbox, Select, Button } from "antd";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const { filterParams } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(
      getProductListRequest({
        ...filterParams,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getCategoryListRequest());
  }, []);

  const renderCategoryList = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Fragment key={item.id}>
          <Checkbox
            value={item.id}
            style={{ width: "100", height: "50", padding: "10px" }}
          >
            {item.name}
          </Checkbox>
        </Fragment>
      );
    });
  }, [categoryList.data]);

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <S.CardCategoryWrapper key={item.id}>
          <S.LinkWrapper
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}
          >
            <S.imageProductWrapper src={item.image} alt="" />
            <S.titleProductWrapper>{item.name}</S.titleProductWrapper>
            <S.priceProductWrapper>
              <S.PriceWrapper>
                <S.PriceOldWrapper>
                  Giá: {item.price.toLocaleString()} VNĐ
                </S.PriceOldWrapper>
                <S.PriceSaleWrapper>
                  Sale: {item.salePrice.toLocaleString()} VNĐ
                </S.PriceSaleWrapper>
              </S.PriceWrapper>
              <S.PricePercentrapper>
                {(((item.price - item.salePrice) / item.price) * 100).toFixed()}
              </S.PricePercentrapper>
            </S.priceProductWrapper>
            <S.DetailProductWrapper>
              <S.CommentProductWrapper>
                <span>{item.reviews.length}</span>
                <AiOutlineComment fontSize={20} />
              </S.CommentProductWrapper>

              <S.HeartProductWrapper>
                <span>{item.favorites.length}</span>
                <AiOutlineHeart fontSize={20} />
              </S.HeartProductWrapper>
            </S.DetailProductWrapper>
          </S.LinkWrapper>
        </S.CardCategoryWrapper>
      );
    });
  }, [productList.data]);

  const handleFilter = (key, value) => {
    const newFilterParams = {
      ...filterParams,
      [key]: value,
    };
    dispatch(setFilterParams(newFilterParams));
    dispatch(
      getProductListRequest({
        ...newFilterParams,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    navigate({
      pathname: ROUTES.USER.HOME,
      search: qs.stringify(newFilterParams),
    });
  };

  const handleShowMore = () => {
    dispatch(
      getProductListRequest({
        ...filterParams,
        page: productList.meta.page + 1,
        limit: PRODUCT_LIMIT,
        more: true,
      })
    );
  };

  return (
    <S.homeWrapper>
      <S.titleHomeWrapper>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <S.shippedWrapper>
              <S.imageShippedWrapper>
                <img src={Shipped} alt="" />
              </S.imageShippedWrapper>
              <S.titleShippedWrapper>
                <h3>Vận Chuyển</h3>
                <p>Từ 1 - 2 ngày</p>
              </S.titleShippedWrapper>
            </S.shippedWrapper>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <S.shippedWrapper>
              <S.imageMaintenanceWrapper>
                <img src={Maintenance} alt="" />
              </S.imageMaintenanceWrapper>
              <S.titleShippedWrapper>
                <h3>Bảo Hành</h3>
                <p>12 Tháng</p>
              </S.titleShippedWrapper>
            </S.shippedWrapper>
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            <S.searchWrapper>
              <S.inputSearchWrapper
                onChange={(e) => {
                  handleFilter("keyword", e.target.value);
                }}
                placeholder="Tìm kiếm ..."
                value={filterParams.keyword}
              />
            </S.searchWrapper>
          </Col>
        </Row>
      </S.titleHomeWrapper>
      <S.categoryWrapper>
        <Row style={{ borderBottom: "3px solid #8c8c8c" }}>
          <S.TitleWrapper>DANH MỤC</S.TitleWrapper>
        </Row>
        <S.ListCategoryWrapper>
          <Checkbox.Group
            onChange={(values) => handleFilter("categoryId", values)}
            value={filterParams.categoryId}
          >
            {renderCategoryList}
          </Checkbox.Group>
        </S.ListCategoryWrapper>
      </S.categoryWrapper>
      <S.productWrapper>
        <Row
          style={{
            textAlign: "right",
            borderBottom: "3px solid #8c8c8c",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <S.TitleWrapper>SẢN PHẨM</S.TitleWrapper>
          <Select
            style={{ width: 130, display: "flex", alignItems: "center" }}
            placeholder="Sắp xếp theo"
            bordered={false}
            onChange={(value) => {
              handleFilter("sort", value);
            }}
            value={filterParams.sort}
          >
            <Select.Option value="price.asc">Tăng dần</Select.Option>
            <Select.Option value="price.desc">Giảm dần</Select.Option>
          </Select>
        </Row>

        <S.ListProductWrapper>{renderProductList}</S.ListProductWrapper>
        {productList.data.length !== productList.meta.total && (
          <Button onClick={() => handleShowMore()}>Hiển thị thêm</Button>
        )}
      </S.productWrapper>
    </S.homeWrapper>
  );
};
export default Home;
