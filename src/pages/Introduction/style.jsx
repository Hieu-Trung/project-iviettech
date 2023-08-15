import { styled } from "styled-components";

export const SlideWrapper = styled.div`
  width: auto;
  overflow: hidden;
  padding: 20px;
  border-radius: 20px;
  & img {
    height: 450px;
    overflow: hidden;
    border-radius: 20px;
    @media only screen and (max-width: 37.5em) {
      height: 300px;
    }
    @media only screen and (max-width: 28.125em) {
      height: 200px;
    }
  }
`;

export const TitleWrapper = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5625em;
  padding: 10px 0;
  color: #f5222d;
  @media only screen and (max-width: 37.5em) {
    font-size: 0.875em;
  }
`;

export const TitleAboutWrapper = styled.div`
  font-size: 30px;
  color: #000000;
  line-height: 24px;
  text-align: start;
  padding-top: 50px;
  padding-left: 20px;
  font-weight: 600;
  @media only screen and (max-width: 37.5em) {
    font-size: 1.25em;
  }
`;

export const AboutDetailWrapper = styled.div`
  padding: 50px;
  justify-content: space-between;
  & img {
    height: 400px;
    filter: drop-shadow(0 0 0.75rem #8c8c8c);
    border-radius: 20px;
    @media only screen and (max-width: 37.5em) {
      height: 300px;
    }
    @media only screen and (max-width: 28.125em) {
      height: 200px;
    }
  }
  @media only screen and (max-width: 37.5em) {
    padding: 20px;
  }
  & Col {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TitleDetailAboutWrapper = styled.p`
  font-size: 20px;
  line-height: 35px;
  font-weight: 400;
  letter-spacing: 3px;
  padding: 50px;
  @media only screen and (max-width: 37.5em) {
    font-size: 1em;
    padding: 0;
  }
  @media only screen and (max-width: 28.125em) {
    font-size: 0.8em;
  }
`;
