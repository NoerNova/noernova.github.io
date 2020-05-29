import styled, { createGlobalStyle } from "styled-components";
import colors from "../themes/colors";
import homeImg from "../assets/images/me_BW.jpg";

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Gradient = styled.div`
  background: linear-gradient(45deg, hsl(0, 0%, 90%), hsl(0, 0%, 96%));
  height: 100%;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  background-image: url(${homeImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  opacity: 0.3;
  height: 100vh;
`;

export const NameTitleContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 960px) {
    left: 50%;
    top: 35%;
  }
`;

export const NameTitle = styled.h1`
  font-family: "Helvetica";
  font-size: 4.7rem;
  font-weight: normal;
  color: ${colors.mainFontColors};
  @media (max-width: 960px) {
    font-size: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 2.8rem;
  }
`;

export const Description = styled.p`
  font-family: "NovaMono";
  font-size: 1.8rem;
  font-weight: normal;
  color: ${colors.mainFontColors};
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.1rem;
  }
`;

export const SocialContainer = styled.div`
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
