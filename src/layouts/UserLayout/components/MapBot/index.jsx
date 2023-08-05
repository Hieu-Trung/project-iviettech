import { BiMap } from "react-icons/bi";

import * as S from "./style";

const MapBot = () => {
  return (
    <S.LinkWrapper to="http://surl.li/jijyr" target={"_blank"}>
      <S.BotWrapper>
        <BiMap style={{ fontSize: "25px", color: "#ffffff" }} />
      </S.BotWrapper>
    </S.LinkWrapper>
  );
};
export default MapBot;
