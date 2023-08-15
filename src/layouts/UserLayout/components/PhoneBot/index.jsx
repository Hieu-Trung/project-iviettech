import { BsFillTelephoneFill } from "react-icons/bs";

import * as S from "./style";

const PhoneBot = () => {
  return (
    <S.LinkWrapper to="tel: +84-903-545-910">
      <S.BotWrapper>
        <BsFillTelephoneFill style={{ fontSize: "25px" }} />
      </S.BotWrapper>
    </S.LinkWrapper>
  );
};
export default PhoneBot;
