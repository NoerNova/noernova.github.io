import styled from "styled-components";
import colors from "../themes/colors";

export const AboutPageContainer = styled.div`
  height: 100%;
  background: ${colors.mainBackgroundColor};
  @media (min-height: 1000px) {
    margin-top: 7rem;
  }
  @media (min-width: 721px) {
    position: absolute;
    left: 0;
  }
  @media (max-width: 720px) {
    margin-top: 5rem;
  }
`;

export const Box = styled.div`
  background-color: rgb(231, 221, 213);
  position: absolute;
  top: 6rem;
  height: 85%;
  width: 50%;
  left: 30%;
  @media (max-width: 720px) {
    position: fixed;
    height: 100%;
    bottom: 0;
    left: 10%;
  }
`;

export const ImageCorouselContainer = styled.div`
  position: absolute;
  left: 12%;
  top: 11rem;
  width: 32%;
  flex-direction: column;
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
  position: relative;
  justify-content: center;
  margin-bottom: 5rem;
  width: 45%;
  left: 45%;
  @media (max-width: 720px) {
    position: absolute;
    justify-content: center;
    margin-top: 1rem;
    width: 90%;
    left: 5%;
  }
  @media (min-width: 721px) {
    left: 50%;
    width: 45%;
    top: 33%;
  }
`;

export const AboutTitle = styled.h2`
  font-family: "Kefa";
  font-size: 2rem;
  color: ${colors.mainFontColors};
  padding: 10px;
  @media (max-width: 960px) {
    font-size: 1.7rem;
  }
`;

export const AboutContent = styled.p`
  font-family: "Kefa";
  font-size: 1.3rem;
  color: ${colors.mainFontColors};
  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;
