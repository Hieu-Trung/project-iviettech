import { styled } from "styled-components";

export const TitleProcessWrapper = styled.h1`
  padding: 60px 20px;
  font-size: 30px;
  color: #000000;
  line-height: 24px;
  text-align: start;
  font-weight: 600;
`;

export const ProcessWrapper = styled.div`
  padding: 20px 0;
  & img {
    height: 350px;
    filter: drop-shadow(0 0 0.75rem #8c8c8c);
    border-radius: 20px;
  }
`;

export const StepProcessWrapper = styled.div`
 padding: 0 20px;
 margin: 0;
`;
