import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const BotWrapper = styled.div`
  height: 50px;
  width: 50px;
  background: linear-gradient(#8a82fb, #487ed7);
  border-radius: 50%;
  place-items: center;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  cursor: pointer;
  &::before {
    content: "";
    width: 70%;
    height: 70%;
    position: absolute;
    background-color: #8a82fb;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
  }
  &::before {
    animation: pulse 2s ease-out infinite;
  }
  &::after {
    animation: pulse 2s 1s ease-out infinite;
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
