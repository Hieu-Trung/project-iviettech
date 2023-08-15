import { styled } from "styled-components";
import { Row } from "antd";

export const TitleProcessWrapper = styled.h1`
  padding: 20px;
  font-size: 30px;
  color: #000000;
  line-height: 24px;
  text-align: start;
  font-weight: 600;
  @media only screen and (max-width: 37.5em) {
    font-size: 1.25em;
  }
`;

export const ProcessWrapper = styled.div`
  padding: 20px;
  & img {
    width: 100%;
    height: 350px;
    filter: drop-shadow(0 0 0.75rem #8c8c8c);
    border-radius: 20px;
    @media only screen and (max-width: 37.5em) {
      height: 200px;
      width: 100%;
    }
  }
  & Col {
    display: flex;
    justify-content: center;
  }
`;

export const StepProcessWrapper = styled.div`
  padding: 0 20px;
  margin: 0;
  @media only screen and (max-width: 37.5em) {
    padding: 20px 0;
  }
`;

export const StyleColWrapper = styled(Row)`
  margin: 0;
  @media only screen and (max-width: 62.5em) {
    flex-direction: column-reverse;
  }
`;
