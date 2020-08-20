import styled from "styled-components";
import colors from "../themes/colors";

export const WorkPageContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 5rem;
  background: ${colors.mainBackgroundColor};
  overflow: hidden;
  @media screen and (orientation: landscape) and (min-height: 360px) {
    height: 100vw;
  }
`;

export const Box = styled.div`
  position: absolute;
  background-color: rgb(193, 200, 204);
  width: 45%;
  height: 80%;
  right: 20%;
  top: 7rem;
  @media (max-width: 600px) {
    left: 1.2rem;
    top: 10rem;
    width: 60%;
  }
  @media (min-height: 900px) and (min-width: 700px) {
    min-height: 50%;
  }
`;

export const SecondBox = styled(Box)`
  left: 20%;
`;

export const CodingImg = styled.img`
  position: absolute;
  width: 80%;
  max-width: 500px;
  height: auto;
  top: 13rem;
  left: 10%;
  @media (min-width: 1400px) {
    left: 15%;
  }
  @media (max-width: 1200px) {
    max-width: 400px;
  }
  @media (max-width: 960px) {
    max-width: 350px;
  }
  @media (max-width: 840px) {
    max-width: 300px;
    left: 4%;
  }
  @media (max-width: 600px) {
    position: relative;
    left: 10%;
    top: 6rem;
  }
`;

export const RockingImg = styled.img`
  position: absolute;
  width: 80%;
  left: 55%;
  top: 8rem;
  max-width: 350px;
  @media (max-width: 840px) {
    max-width: 300px;
    left: 50%;
  }
  @media (max-width: 600px) {
    position: relative;
    top: 6rem;
    left: 10%;
  }
`;

export const WorkContentContainer = styled.div`
  position: absolute;
  justify-content: center;
  width: 40%;
  left: 55%;
  top: 10rem;
  padding-bottom: 4rem;
  @media (max-width: 600px) {
    position: relative;
    width: 90%;
    top: 5rem;
    left: 2rem;
  }
`;

export const SecondWorkContentContainer = styled(WorkContentContainer)`
  left: 10%;
`;

export const WorkContentTitle = styled.h2`
  font-family: "Kefa";
  color: ${colors.mainFontColors};
  font-size: 2rem;
  padding: 2rem 0 2rem 0;
  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media (max-width: 840px) {
    font-size: 1.5rem;
  }
`;

export const WorkContentParagraph = styled.p`
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
