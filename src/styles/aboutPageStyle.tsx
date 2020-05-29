import styled from "styled-components";
import aboutBG from "../assets/images/orangeBG.png";
import px2vw from "../components/px2vw";

export const BackgroundImage = styled.div`
  background-image: url(${aboutBG});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
`;

export const ImageCorouselContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 35%;
  width: ${px2vw(500)};
  height: 80%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 960px) {
    left: 50%;
    top: 40%;
  }
`;

export const Image = styled.img`
  height: 80%;
  width: ${px2vw(500)};
`;
