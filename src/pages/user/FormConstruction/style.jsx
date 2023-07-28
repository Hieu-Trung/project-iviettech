import { styled } from "styled-components";
import ImageForm from "../../../image/ImageForm.png";

export const FormConstructionWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const BackgroundFormWrapper = styled.div`
  background-image: url(${ImageForm});
  width: calc(100% - 40px);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
`;

export const TitleWrapper = styled.div`
  font-size: 50px;
  line-height: 30px;
  font-weight: 900;
`;

export const TitleSloganWrapper = styled.div`
  font-size: 17px;
  line-height: 30px;
  font-weight: 500;
  padding: 10px 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10px auto 20px auto;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background: rgba(128, 128, 128, 0.5);
  border-radius: 10px;
`;
export const H1Wrapper = styled.h1`
  font-size: 25px;
  line-height: 25px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
`;

export const SpanWrapper = styled.span`
  color: #ffffff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
export const BottomFormWrapper = styled.button`
  animation: changeBg 5s infinite alternate linear;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;
