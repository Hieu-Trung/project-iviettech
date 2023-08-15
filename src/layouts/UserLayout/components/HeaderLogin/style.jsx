import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../../../image/background.jpg";

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
  margin: 0 10px;
  display: flex;
`;
export const ImageWrapper = styled.img`
  height: 3.125em;
  width: auto;
  @media only screen and (max-width: 37.5em) {
    height: 1.875em;
  }
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
  @media only screen and (max-width: 37.5em) {
    font-size: 0.625em;
  }
  @media only screen and (max-width: 28.125em) {
    font-size: 0.5em;
  }
`;
export const SloganCompanyWrapper = styled.div`
  font-size: 0.625em;
  font-weight: 500;
  color: #ffffff;

  @media only screen and (max-width: 28.125em) {
    font-size: 0.4375em;
  }
`;
export const AboutCompanyWrapper = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  padding: 0 20px;
  @media only screen and (max-width: 37.5em) {
    font-size: 0.625em;
  }
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
