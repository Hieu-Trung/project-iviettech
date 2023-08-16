import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LikeProductWrapper = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
`;

export const LinkWrapper = styled(Link)`
  color: #000000;
  text-decoration: none;
`;
export const DetailProduct = styled.div`
  padding: 0 10px;
`;
