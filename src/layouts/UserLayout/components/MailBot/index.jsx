import { AiOutlineMail } from "react-icons/ai";

import * as S from "./style";

const MailBot = () => {
  return (
    <S.LinkWrapper>
      <S.BotWrapper>
        <AiOutlineMail style={{ fontSize: "25px" }} />
      </S.BotWrapper>
    </S.LinkWrapper>
  );
};
export default MailBot;
