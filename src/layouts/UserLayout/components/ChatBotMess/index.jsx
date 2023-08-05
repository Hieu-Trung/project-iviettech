import { BsMessenger } from "react-icons/bs";

import * as S from "./style";

const ChatBotMess = () => {
  return (
    <S.LinkWrapper
      to="https://www.facebook.com/messages/t/116184101534298"
      target={"_blank"}
    >
      <S.BotWrapper>
        <BsMessenger style={{ fontSize: "25px" }} />
      </S.BotWrapper>
    </S.LinkWrapper>
  );
};
export default ChatBotMess;
