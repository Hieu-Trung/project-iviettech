import { styled } from "styled-components";


export const SlideWrapper = styled.div`
  width: auto;
  overflow: hidden;
  padding: 20px;
  border-radius: 20px;
  & img {
    height: 500px;
    overflow: hidden;
    border-radius: 20px;
  }
`;

export const TitleWrapper = styled.p`
  width: 100%;
  text-align: center;
  font-size: 25px;
  padding: 10px 0;
  color: #f5222d;
`;

export const TitleAboutWrapper = styled.div`
  font-size: 30px;
  color: #000000;
  line-height: 24px;
  text-align: start;
  padding-top: 50px;
  padding-left: 20px;
  font-weight: 600;
`;

export const AboutDetailWrapper = styled.div`
  padding: 50px;
  justify-content: space-between;
  & img {
    height: 400px;
    filter: drop-shadow(0 0 0.75rem #8c8c8c);
    border-radius: 20px;
  }
  & Col{
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
`;
