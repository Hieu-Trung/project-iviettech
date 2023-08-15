import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
export const BottomLoginWrapper = styled.button`
  animation: changeBg 5s infinite alternate linear;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  border: unset;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  height: 100%;
  padding: 10px;
`;

export const LoginFormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background: rgba(128, 128, 128, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

export const TitleLoginWrapper = styled.div`
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RegisterAccountWrapper = styled.div`
  color: #ffffff;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
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
