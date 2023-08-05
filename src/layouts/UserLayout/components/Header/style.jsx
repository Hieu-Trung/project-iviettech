import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 99;
  height: 55px;
  background-color: #8c8c8c;
  border-bottom: 1px solid #bfbfbf;
  z-index: 99;
`;

export const StyleWrapper = styled.div`
  font-size: 20px;
  margin: 0 10px;
  display: flex;
`;

export const TitleCompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  justify-content: center;
`;
export const CompanyWrapper = styled.h1`
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
`;
export const SloganCompanyWrapper = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
`;

export const TitleWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  padding: 0 5px;
  text-align: start;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  color: #ffffff;
  &:hover {
    color: #1677ff;
  }
`;

export const LinkWrapper = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #1677ff;
  }
`;

export const CartWrapper = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fafafa ;
  padding: 0 20px;
  cursor: pointer;
  &:hover{
    color: #1677ff;
  }
`;
