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
  display:  flex;
  flex-direction:  column;
  padding: 0 10px;
  margin: 0;
  text-align: center;
  justify-content: center;
`;
export const CompanyWrapper = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
`;
export const SloganCompanyWrapper = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`;
export const DetailAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 0 7px;
`;
export const TitleWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  padding: 0 5px;
  text-align: start;
`;
export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: 2px solid #bfbfbf;
  padding: 0 5px;
  color: #ffffff;
  &:hover {
    color: #1677ff;
  }
`;
export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 5px;
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