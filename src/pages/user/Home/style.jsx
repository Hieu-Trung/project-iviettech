import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Sale from "../../../image/sale.jpg";

export const homeWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const titleHomeWrapper = styled.div`
  padding: 20px;
  margin: 20px 10px;
  border-radius: 10px;
  background-color: #ffffff;
  & Col {
    margin: 20px 0;
  }
`;

export const shippedWrapper = styled.div`
  display: flex;
`;
export const imageShippedWrapper = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media only screen and (max-width: 37.5em) {
    width: 60px;
    height: 60px;
  }
`;

export const titleShippedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  h3,
  p {
    padding: 5px 0;
    margin: 0;
    @media only screen and (max-width: 37.5em) {
      font-size: 1em;
    }
    @media only screen and (max-width: 28.125em) {
      font-size: 0.8em;
    }
  }
`;

export const imageMaintenanceWrapper = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media only screen and (max-width: 37.5em) {
    width: 60px;
    height: 60px;
  }
`;

export const searchWrapper = styled.div`
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 62.5em) {
    padding: 20px 10px;
  }
`;

export const inputSearchWrapper = styled.input`
  padding: 10px;
  width: 100%;
  border: unset;
  background: unset;
  border-bottom: 2px solid #8c8c8c;
  &:focus-visible {
    outline: none;
  }
`;

export const categoryWrapper = styled.div`
  background-color: #ffffff;
  margin: 20px 10px;
  padding: 20px;
  border-radius: 10px;
`;
export const TitleWrapper = styled.h1`
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  text-align: start;
  padding: 10px 0;
`;
export const ListCategoryWrapper = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  justify-content: start;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 10px;
`;
export const productWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  margin: 20px 10px;
  padding: 20px;
  border-radius: 10px;
`;
export const ListProductWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const CardCategoryWrapper = styled.div`
  width: 250px;
  background-color: #f2f2f2;
  height: 350px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  padding: 0 10px;
  @media only screen and (max-width: 33.125em) {
    width: 170px;
    height: 290px;
  }
  @media only screen and (max-width: 25em) {
    width: 160px;
    height: 280px;
  }
`;
export const imageProductWrapper = styled.img`
  margin: 10px auto;
  display: block;
  height: 210px;
  @media only screen and (max-width: 33.125em) {
    height: 140px;
  }
  @media only screen and (max-width: 25em) {
    height: 140px;
  }
`;

export const LinkWrapper = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

export const titleProductWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 500;
`;

export const priceProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 400;
  height: 50px;
  justify-content: center;
`;
export const PriceOldWrapper = styled.span`
  text-decoration: line-through;
  padding: 5px 0;
  color: #bfbfbf;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PriceSaleWrapper = styled.span`
  color: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const DetailProductWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;
export const CommentProductWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #8c8c8c;
  & span {
    padding: 0 10px;
  }
`;
export const HeartProductWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #8c8c8c;
  & span {
    padding: 0 10px;
  }
`;
