import styled from "styled-components";
import colors from "../themes/colors";

export const AboutPageContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 5rem;
  background: ${colors.mainBackgroundColor};
  overflow: hidden;
`;

export const Box = styled.div`
  position: absolute;
  background-color: rgb(231, 221, 213);
  width: 45%;
  height: 80%;

  right: 20%;
  top: 7rem;
  @media (max-width: 720px) {
    left: 1.2rem;
    top: 10rem;
    width: 60%;
  }
  @media (min-height: 900px) and (min-width: 700px) {
    min-height: 50%;
  }
`;

export const ImageCorouselContainer = styled.div`
  position: absolute;
  left: 15%;
  top: 13rem;
  width: 28%;
  @media (max-width: 720px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    flex-flow: row;
  }
  @media (min-width: 1400px) {
    width: 28%;
  }
`;

export const AboutContentContainer = styled.div`
  position: absolute;
  justify-content: center;
  width: 40%;
  left: 55%;
  top: 10rem;
  padding-bottom: 4rem;
  @media (max-width: 720px) {
    position: relative;
    width: 90%;
    top: 5rem;
    left: 2rem;
  }
`;

export const AboutTitle = styled.h2`
  font-family: "Kefa";
  font-size: 2rem;
  color: ${colors.mainFontColors};
  padding: 2rem 0 2rem 0;
  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media (max-width: 840px) {
    font-size: 1.5rem;
  }
`;

export const AboutContent = styled.p`
  font-family: "Kefa";
  color: ${colors.mainFontColors};
  font-size: 1.5rem;
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
  @media (min-width: 600px) and (max-width: 840px) {
    font-size: 1rem;
  }
`;
