import * as S from "./style";
import Shipped from "../../../image/shipped.jpg";
import Maintenance from "../../../image/maintenance.jpg";
import Product from "../../../image/background.jpg";
import { Col, Row, Checkbox, Select, Button } from "antd";
import { PRODUCT_LIMIT } from "../../../constants/pagning";
import { getProductListRequest } from "../../../redux/slicers/product.slice";
import { getCategoryListRequest } from "../../../redux/slicers/category.slice";
import { ROUTES } from "../../../constants/routers";

import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, generatePath } from "react-router-dom";

const Home = () => {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    keyword: "",
    order: "",
  });

  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      getProductListRequest({
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
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <S.imageProductWrapper src={Product} alt="" />
            <S.titleProductWrapper>{item.name}</S.titleProductWrapper>

            <S.priceProductWrapper>
              <p>{item.price.toLocaleString()} VNĐ</p>
              <p>{item.reviews.length} danh gia</p>
            </S.priceProductWrapper>
          </Link>
        </S.CardCategoryWrapper>
      );
    });
  }, [productList.data]);

  const handleFilter = (key, values) => {
    setFilterParams({
      ...filterParams,
      [key]: values,
    });
    dispatch(
      getProductListRequest({
        ...filterParams,
        [key]: values,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
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
          <Col span={6}>
            <S.shippedWrapper>
              <S.imageShippedWrapper>
                <img src={Shipped} width={50} height={50} alt="" />
              </S.imageShippedWrapper>
              <S.titleShippedWrapper>
                <h3 style={{ padding: "3px 0", margin: "0" }}>Vận Chuyển</h3>
                <p style={{ padding: "3px 0", margin: "0" }}>Từ 1 - 2 ngày</p>
              </S.titleShippedWrapper>
            </S.shippedWrapper>
          </Col>
          <Col span={6}>
            <S.shippedWrapper>
              <S.imageMaintenanceWrapper>
                <img src={Maintenance} width={50} height={50} alt="" />
              </S.imageMaintenanceWrapper>
              <S.titleShippedWrapper>
                <h3 style={{ padding: "3px 0", margin: "0" }}>Bảo Hành</h3>
                <p style={{ padding: "3px 0", margin: "0" }}>12 Tháng</p>
              </S.titleShippedWrapper>
            </S.shippedWrapper>
          </Col>
          <Col span={12}>
            <S.searchWrapper>
              <S.inputSearchWrapper
                onChange={(e) => {
                  handleFilter("keyword", e.target.value);
                }}
                placeholder="Tìm kiếm ..."
              />
              <S.buttonSearchWrapper type="submit">
                Search
              </S.buttonSearchWrapper>
            </S.searchWrapper>
          </Col>
        </Row>
      </S.titleHomeWrapper>
      <S.categoryWrapper>
        <Row>
          <S.TitleWrapper>DANH MỤC</S.TitleWrapper>
        </Row>
        <S.ListCategoryWrapper>
          <Checkbox.Group
            onChange={(values) => handleFilter("categoryId", values)}
          >
            {renderCategoryList}
          </Checkbox.Group>
        </S.ListCategoryWrapper>
      </S.categoryWrapper>
      <S.productWrapper>
        <Row>
          <S.TitleWrapper>SẢN PHẨM</S.TitleWrapper>
        </Row>
        <Select
          onChange={(value) => {
            handleFilter("sort", value);
          }}
        >
          <Select.Option value="price.asc">Tăng dần</Select.Option>
          <Select.Option value="price.desc">Giảm dần</Select.Option>
        </Select>
        <S.ListProductWrapper>{renderProductList}</S.ListProductWrapper>
        {productList.data.length !== productList.meta.total && (
          <Button onClick={() => handleShowMore()}>Hiển thị thêm</Button>
        )}
      </S.productWrapper>
    </S.homeWrapper>
  );
};
export default Home;
