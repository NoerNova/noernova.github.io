import styled from "styled-components";
import aboutBG from "../assets/images/orangeBG.png";
import px2vw from "../components/px2vw";
import colors from "../themes/colors";

export const AboutPageContainer = styled.div`
  height: 100%;
  margin-top: 5rem;
  background: ${colors.mainBackgroundColor};
`;

export const Box = styled.div`
  background-color: rgb(231, 221, 213);
  position: absolute;
  height: 100%;
  width: 50%;
  left: 30%;
  @media (max-width: 600px) {
    left: 10%;
  }
  @media (max-width: 360px) {
    height: 120vh;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${aboutBG});
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  @media (max-width: 600px) {
    background-repeat: repeat-y;
    background-size: auto;
  }
`;

export const ImageCorouselContainer = styled.div`
  position: absolute;
  left: 150px;
  top: 170px;
  width: 32%;
  flex-direction: column;
  @media (max-width: 600px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    flex-flow: row;
  }
`;

export const ImageGalleryContainer = styled.div`
  /* root container */
  .image-gallery {
  }
  /* image container */
  .image-gallery-slides {
  }
  /* images class */
  .image-gallery-image {
  }
  @media (max-width: 600px) {
    .image-gallery {
    }
    .image-gallery-slides {
    }
    .image-gallery-image {
    }
  }
`;

export const AboutContentContainer = styled.div`
  position: relative;
  justify-content: center;
  margin-bottom: 5rem;
  width: 50%;
  left: 45%;
  @media (max-width: 600px) {
    position: absolute;
    justify-content: center;
    margin-top: 1rem;
    width: 90%;
    left: 5%;
  }
`;

export const AboutTitle = styled.h2`
  font-family: "NovaMono";
  color: ${colors.mainFontColors};
  padding: 10px;
  @media (max-width: 960px) {
    font-size: 1.7rem;
  }
`;

export const AboutContent = styled.p`
  font-family: "NovaMono";
  color: ${colors.mainFontColors};
`;
