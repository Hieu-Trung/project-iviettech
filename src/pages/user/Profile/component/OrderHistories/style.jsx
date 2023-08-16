import { styled } from "styled-components";
import { Col } from "antd";

export const StyleColWrapper = styled(Col)`
  padding: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & span {
    font-weight: 600;
  }
`;
