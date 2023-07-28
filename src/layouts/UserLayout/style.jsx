import styled from "styled-components";

export const UserLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const MainWrapper = styled.div`
  flex: 1;
  margin-top: 55px;
  background-color: #ececec;
  z-index:  50;
`;
export const MainButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;