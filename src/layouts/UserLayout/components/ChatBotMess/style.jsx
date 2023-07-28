import { styled } from "styled-components";

export const BotWrapper = styled.div`
  height: 50px;
  width: 50px;
  background: linear-gradient(#8a82fb, #487ed7);
  margin: auto;
  border-radius: 50%;
  place-items: center;
  color: #ffffff;
  position: relative;
  &::before
  {
    content: "";
    width: 100%;
    height: 100%;
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