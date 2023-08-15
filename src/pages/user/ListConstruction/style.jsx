import { styled } from "styled-components";

export const ConstructionWrapper = styled.div`
  margin: 20px;
  padding: 0;
`;
export const TitleWrapper = styled.h1`
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  padding: 20px 0;
  @media only screen and (max-width: 37.5em) {
    font-size: 1.25em;
  }
`;
export const ListConstructionWrapper = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const CardConstructionWrapper = styled.div`
  width: 400px;
  background-color: #f5f5f5;
  height: 300px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  & img {
    height: 200px;
    object-fit: "cover";
    object-position: "center";
    width: 100%;
  }
`;



export const TitleListWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
  padding:0  5px;
`;

export const ContentWrapper = styled.p`
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  padding: 0 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
