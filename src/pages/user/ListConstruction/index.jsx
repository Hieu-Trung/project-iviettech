import * as S from "./style";
import "animate.css/animate.min.css";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Modal } from "antd";

import Logo from "../../../image/background.jpg";

const ListConstruction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <S.ConstructionWrapper>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <S.TitleWrapper>MỘT SỐ KHÔNG GIAN NỘI THẤT</S.TitleWrapper>
      </AnimationOnScroll>
      <S.ListConstructionWrapper>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <S.CardConstructionWrapper onClick={showModal}>
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
          <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
            <p>
              https://zenoamaro.github.io/react-quill/?fbclid=IwAR30E_WqSGq17nC_J8RWd_Fw4tzONykg3uzZsk6LmM-BYTuXqrrtuvzqAeA
            </p>
            <p>
              https://www.willpeavy.com/tools/minifier/?fbclid=IwAR1o6nvdV49dSaJsd4KYuL2koVHCQsNHzKYBQO5-8McZmdGr-a6UPog_RMI
            </p>
          </Modal>
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
