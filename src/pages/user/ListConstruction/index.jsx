import * as S from "./style";
import Logo from "../../../image/background.jpg";

const ListConstruction = () => {
  
  return (
    <S.ConstructionWrapper>
      <S.TitleWrapper>MỘT SỐ KHÔNG GIAN NỘI THẤT</S.TitleWrapper>

      <S.ListConstructionWrapper>
        <S.CardConstructionWrapper>
          <img src={Logo} alt="" />

          <S.TitleListWrapper>
            Nội Thất phòng khách hiện đại và sang trọng
          </S.TitleListWrapper>
          <S.ContentWrapper>
            Nếu ví ngôi nhà là một cá thể nhất định thì không gian phòng khách
            chính là vẻ bề ngoài còn nội thất của phòng khách thể hiện phần nào
          </S.ContentWrapper>
        </S.CardConstructionWrapper>

        <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>

        <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>

        <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>

        <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>

        <S.CardConstructionWrapper>đáas</S.CardConstructionWrapper>
      </S.ListConstructionWrapper>
    </S.ConstructionWrapper>
  );
};
export default ListConstruction;
