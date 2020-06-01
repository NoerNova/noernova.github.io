import styled from "styled-components";
import colors from "../themes/colors";

export const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.mainBackgroundColor};
`;

export const WorksPageContainer = styled.div`
  height: 100%;
  /* background: green; */
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
  background-color: rgb(186, 195, 199);
  position: absolute;
  top: 6rem;
  height: 85%;
  width: 50%;
  left: 30%;
  @media (max-width: 720px) {
    position: fixed;
    width: 65%;
    height: 100%;
    top: 7rem;
    bottom: 0;
    left: 4%;
  }
`;

export const CodingImg = styled.img`
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 12%;
  top: 18rem;
  width: 32%;
  flex-direction: column;
  @media (max-width: 720px) {
    position: relative;
    left: 10%;
    top: 0;
    width: 80%;
    flex-flow: row;
  }
  @media (min-width: 1400px) {
    width: 28%;
  }
`;

export const WorksContentContainer = styled.div`
  position: relative;
  justify-content: center;
  margin-bottom: 5rem;
  width: 45%;
  left: 45%;
  @media (max-width: 720px) {
    /* position: absolute; */
    justify-content: center;
    /* margin-top: 1rem; */
    width: 85%;
    left: 7%;
  }
  @media (min-width: 721px) {
    left: 50%;
    width: 45%;
    top: 33%;
  }
`;

export const WorksTitle = styled.h2`
  font-family: "Kefa";
  font-size: 2rem;
  color: ${colors.mainFontColors};
  padding: 10px;
  @media (max-width: 960px) {
    font-size: 1.7rem;
  }
`;

export const WorksContent = styled.p`
  font-family: "Kefa";
  font-size: 1.3rem;
  color: ${colors.mainFontColors};
  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;
