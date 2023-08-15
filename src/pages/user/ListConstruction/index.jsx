import * as S from "./style";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Logo from "../../../image/background.jpg";

const ListConstruction = () => {
  return (
    <S.ConstructionWrapper>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <S.TitleWrapper>MỘT SỐ KHÔNG GIAN NỘI THẤT</S.TitleWrapper>
      </AnimationOnScroll>
      <S.ListConstructionWrapper>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>
            <img src={Logo} alt="" />
            <S.TitleListWrapper>
              Nội Thất phòng khách hiện đại và sang trọng
            </S.TitleListWrapper>
            <S.ContentWrapper>
              Nếu ví ngôi nhà là một cá thể nhất định thì không gian phòng khách
              chính là vẻ bề ngoài còn nội thất của phòng khách thể hiện phần
              nào
            </S.ContentWrapper>
          </S.CardConstructionWrapper>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>
            <img src={Logo} alt="" />
            <S.TitleListWrapper>
              Nội Thất phòng khách hiện đại và sang trọng
            </S.TitleListWrapper>
            <S.ContentWrapper>
              Nếu ví ngôi nhà là một cá thể nhất định thì không gian phòng khách
              chính là vẻ bề ngoài còn nội thất của phòng khách thể hiện phần
              nào
            </S.ContentWrapper>
          </S.CardConstructionWrapper>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <S.CardConstructionWrapper>
            <img src={Logo} alt="" />
            <S.TitleListWrapper>
              Nội Thất phòng khách hiện đại và sang trọng
            </S.TitleListWrapper>
            <S.ContentWrapper>
              Nếu ví ngôi nhà là một cá thể nhất định thì không gian phòng khách
              chính là vẻ bề ngoài còn nội thất của phòng khách thể hiện phần
              nào
            </S.ContentWrapper>
          </S.CardConstructionWrapper>
        </AnimationOnScroll>
      </S.ListConstructionWrapper>
    </S.ConstructionWrapper>
  );
};
export default ListConstruction;
