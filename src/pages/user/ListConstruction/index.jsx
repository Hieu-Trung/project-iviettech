import * as S from "./style";
import { Animated } from "react-animated-css";
import Logo from "../../../image/background.jpg";


const ListConstruction = () => {
  const styleImage = {
    objectFit: "cover",
    width: "100%",
    height: " 100%",
    objectPosition: "center",
  };
  return (
    <S.ConstructionWrapper>
      <Animated animateIn="animate__fadeInLeft">
        <S.TitleWrapper>MỘT SỐ KHÔNG GIAN NỘI THẤT</S.TitleWrapper>
      </Animated>
      <S.ListConstructionWrapper>
        <Animated animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>
            <S.image>
              <img style={styleImage} src={Logo} alt=""/>
              
            </S.image>
            <S.TitleListWrapper>
              Nội Thất phòng khách hiện đại và sang trọng
            </S.TitleListWrapper>
            <S.ContentWrapper>
              Nếu ví ngôi nhà là một cá thể nhất định thì không gian phòng khách
              chính là vẻ bề ngoài còn nội thất của phòng khách thể hiện phần
              nào
            </S.ContentWrapper>
          </S.CardConstructionWrapper>
        </Animated>
        <Animated animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </Animated>
        <Animated animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </Animated>
        <Animated animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </Animated>
        <Animated animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </Animated>
        <Animated animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
        </Animated>
      </S.ListConstructionWrapper>
    </S.ConstructionWrapper>
  );
};
export default ListConstruction;
