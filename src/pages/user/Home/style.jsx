import { styled } from "styled-components";

export const homeWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const titleHomeWrapper = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;

export const shippedWrapper = styled.div`
  display: flex;
`;
export const imageShippedWrapper = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const titleShippedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export const imageMaintenanceWrapper = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const searchWrapper = styled.div`
  padding: 0 50px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const inputSearchWrapper = styled.input`
  padding: 10px;
  width: 100%;
  border: unset;
  background: unset;
  border-bottom: 2px solid #8c8c8c;
  &:focus-visible {
    outline: none;
  }
`;

export const categoryWrapper = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  margin: 10px;
`;
export const TitleWrapper = styled.h1`
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  padding: 0 10px;
  margin: 10px;
  border-bottom: 3px solid;
`;
export const ListCategoryWrapper = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  justify-content: start;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 10px;
`;
export const productWrapper = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  margin: 10px;
`;
export const ListProductWrapper = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  justify-content: start;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 10px;
`;

export const imageProductWrapper = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;
  display: block;
`;

export const CardCategoryWrapper = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
`;

export const titleProductWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 5px 5px;
`;

export const priceProductWrapper = styled.p`
  font-size: 15px;
  font-weight: 400;
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
`;
