import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBotMess from "./components/ChatBotMess";
import ButtonConstruction from "./components/ConstructionButton";
import ListConstruction from "../../pages/user/ListConstruction";
import MailBot from "./components/MailBot";
import MapBot from "./components/MapBot";
import PhoneBot from "./components/PhoneBot";

import * as S from "./style";
const UserLayout = () => {
  return (
    <S.UserLayoutWrapper>
      <Header />
      <S.MainWrapper>
        <Outlet />
        <S.MainButtonWrapper>
          <PhoneBot />
          <MapBot />
          <MailBot />
          <ChatBotMess />
          <ButtonConstruction />
        </S.MainButtonWrapper>
        <ListConstruction />
      </S.MainWrapper>
      <Footer />
    </S.UserLayoutWrapper>
  );
};
export default UserLayout;
