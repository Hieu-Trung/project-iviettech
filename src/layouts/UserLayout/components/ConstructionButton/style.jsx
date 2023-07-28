import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const BoxWrapper = styled.div`
  --border-size: 3px;
  --border-angle: 0turn;
  cursor: pointer;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
`;

export const TitleConstructionWrapper = styled.div`
  color: #ffffff;
  font-size: 20px;
  line-height: 25px;
  font-weight: 450;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
