import { styled } from "styled-components";
import ImgStep1 from "../../../image/stepConstruction/imgStep1.jpg";
import ImgStep2 from "../../../image/stepConstruction/imgStep2.jpg";
import ImgStep3 from "../../../image/stepConstruction/imgStep3.jpg";

export const TitleProcessWrapper = styled.div`
  padding: 60px;
  padding-left: 20px;
  font-size: 30px;
  color: #000000;
  line-height: 24px;
  text-align: start;
  font-weight: 600;
`;

export const StepProcessWrapper = styled.div`
 padding: 20px;
 margin: 0;
`;

export const ImageStep1Wrapper = styled.div`
  background-image: url(${ImgStep1});
  height: 450px;
  width: 800px;
  background-size: 100% 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin: 10px auto;
  filter: drop-shadow(0 0 0.75rem #8c8c8c);
  border-radius: 20px;
`;

export const ImageStep2Wrapper = styled.div`
  background-image: url(${ImgStep2});
  height: 450px;
  width: 800px;
  background-size: 100% 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin: 10px auto;
  filter: drop-shadow(0 0 0.75rem #8c8c8c);
  border-radius: 20px;
`;
export const ImageStep3Wrapper = styled.div`
  background-image: url(${ImgStep3});
  height: 450px;
  width: 800px;
  background-size: 100% 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin: 10px auto;
  filter: drop-shadow(0 0 0.75rem #8c8c8c);
  border-radius: 20px;
`;
export const ProcessWrapper = styled.div`
  padding: 20px;
`;