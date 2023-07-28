import { styled } from "styled-components";
import Slide1 from '../../image/slide/slide1.jpg'
import Slide2 from '../../image/slide/slide2.jpg'
import Slide3 from "../../image/slide/slide3.jpg";
import Slide4 from "../../image/slide/slide4.jpg";
import Slide5 from "../../image/slide/slide5.jpg";
import About from "../../image/About.jpg";


export const SlideWrapper = styled.div`
  width: auto;
  overflow: hidden;
  padding: 20px;
`;

export const ImageAboutWrapper = styled.div`
  background-image: url(${About});
  height: 300px;
  width: 600px;
  background-size: 100% 100%;
  overflow: hidden;
  filter: drop-shadow(0 0 0.75rem #8c8c8c);
  border-radius: 20px;
`;


export const ImageSlide1Wrapper = styled.div`
  background-image: url(${Slide1});
  min-height: 500px;
  background-size: 100% 100%;
  border-radius: 20px;
  overflow: hidden;
`;
export const ImageSlide2Wrapper = styled.div`
  background-image: url(${Slide2});
  height: 500px;
  background-size: 100% 100%;
  border-radius: 20px;
  overflow: hidden;
`;
export const ImageSlide3Wrapper = styled.div`
  background-image: url(${Slide3});
  height: 500px;
  background-size: 100% 100%;
  border-radius: 20px;
  overflow: hidden;
`;
export const ImageSlide4Wrapper = styled.div`
  background-image: url(${Slide4});
  height: 500px;
  background-size: 100% 100%;
  border-radius: 20px;
  overflow: hidden;
`;
export const ImageSlide5Wrapper = styled.div`
  background-image: url(${Slide5});
  height: 500px;
  background-size: 100% 100%;
  border-radius: 20px;
  overflow: hidden;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  padding: 10px 0;
  color: #f5222d;
`;

export const TitleAboutWrapper = styled.div`
  font-size: 30px;
  color: #000000;
  line-height: 24px;
  text-align: start;
  padding-top: 50px;
  padding-left: 20px;
  font-weight: 600;
`;

export const AboutDetailWrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  
`;
export const TitleDetailAboutWrapper = styled.div`
 font-size: 20px;
 line-height: 24px;
 font-weight: 400;
 letter-spacing: 3px;
  width: 500px;
  margin: auto;
  padding: 0;
`;

