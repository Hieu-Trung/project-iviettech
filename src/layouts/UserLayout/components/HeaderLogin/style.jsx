import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../../../image/background.jpg"

export const StyleLoginWrapper = styled.div`
  background-image: url(${Background});
  height: 100%;
  min-height: 100vh;
  width: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
 
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

export const AboutCompanyWrapper = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  padding: 0 20px;
`;

export const LinkWrapper = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  &:hover {
    color: #1677ff;
  }
`;

