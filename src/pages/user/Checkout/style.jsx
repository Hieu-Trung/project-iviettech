import styled from "styled-components";
import { Row } from "antd";
export const CheckoutWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
`;
export const BottomPay = styled.button`
  color: white;
  background-color: #52c41a;
  padding: 15px 20px;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;
export const BottomBackCart = styled.button`
  color: white;
  background-color: #8c8c8c;
  padding: 15px 20px;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;

export const StyleRowWrapper = styled(Row)`
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 10px;
`;
export const StyleButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
`;
export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  span {
    font-weight: 700;
  }
`;
