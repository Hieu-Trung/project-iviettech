import { styled } from "styled-components";
import { Col, Rate, Row, InputNumber } from "antd";
import Sale from "../../../image/sale.jpg";

export const ProductDetail = styled.div`
  padding: 30px 50px;
`;
export const ProductDetailWrapper = styled(Row)`
  padding: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  & h3 {
    @media only screen and (max-width: 28.75em) {
      font-size: 1em;
    }
    @media only screen and (max-width: 25em) {
      font-size: 0.75em;
    }
  }
`;

export const StyleColWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageProductWrapper = styled.img`
  width: 90%;
  max-height: 300px;
  min-height: 200px;
  border-radius: 10px;
`;
export const BottomLoginWrapper = styled.button`
  color: #ffffff;
  background-color: #000000;
  padding: 15px 20px;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;

export const DetailProductWrapper = styled(Row)`
  display: flex;
  align-items: center;
`;
export const StyleRateWrapper = styled(Rate)`
  font-size: 20px;

  @media only screen and (max-width: 25em) {
    font-size: 15px;
  }
`;

export const TotalRate = styled.span`
  color: #8c8c8c;
  padding: 0 10px;
`;

export const priceProductWrapper = styled(Row)`
  display: flex;
  justify-content: space-between;
`;
export const PriceWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  height: 50px;
  justify-content: center;
`;
export const PriceOldWrapper = styled.span`
  text-decoration: line-through;
  padding: 5px 0;
  color: #bfbfbf;
`;
export const PriceSaleWrapper = styled.span`
  color: red;
`;

export const PricePercentrapper = styled.div`
  background-image: url(${Sale});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleInputNumberWrapper = styled(InputNumber)`
  margin: 10px 0;
`;

export const Review = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  h2 {
    padding: 10px;
  }
`;

export const StyleButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const ListReviewWrapper = styled.div`
  padding: 0 20px;
`;

export const StyleDiv = styled.div`
  border-top: 1px solid #d9d9d9;
  padding: 10px 0;
`;
export const TitleReviewProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;
