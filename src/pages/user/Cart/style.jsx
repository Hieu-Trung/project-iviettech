import { Button } from "antd";
import { styled } from "styled-components";
export const CartListWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
`;
export const BottomLoginWrapper = styled.button`
  width: 100%;
  color: white;
  background-color: red;
  padding: 15px 20px;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background-color: #bfbfbf;
`;
export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 600;
  }
`;
export const ButtonPayWrapper = styled.div``;
export const BottomPay = styled(Button)`
  width: 100%;
  color: white;
  background-color: #8c8c8c;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;
