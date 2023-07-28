import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const FooterWrapper = styled.div`
  background-color: #8c8c8c;
  padding: 20px;
  color: #ffffff;
  z-index: 0;
`;

export const ConnectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

export const TitleWrapper = styled.div`
  font-size: 17px;
  line-height: 25px;
  font-weight: 500;
`;
export const SpanStyleWrapper = styled.span`
  border-bottom: 2px solid #ffffff;
`;

export const StyleBoldWrapper = styled.span`
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
`;
export const LinkWrapper = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  padding: 5px 0;
  &:hover {
    color: #1677ff;
  }
`;

export const TitleAboutWrapper = styled.div`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  padding: 10px 0;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 0;
`;

export const MediaConnectWrapper = styled.div`
  display: flex;
`;
