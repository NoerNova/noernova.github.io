import styled, { createGlobalStyle } from "styled-components";
import colors from "../themes/colors";
import homeImg from "../assets/images/me_BW.jpg";

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Arial Rounded MT';
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
  border: 7px solid #f5f5f5;
  opacity: 0.3;
  height: 100vh;
`;

export const Logo = styled.a`
  position: absolute;
  top: 3.6%;
  left: 2.8%;
  text-decoration: none;
  color: ${colors.mainFontColors};
  font-weight: normal;
  font-size: 1.8rem;
  @media (max-width: 760px) {
    font-size: 1.2rem;
    top: 3%;
    left: 8%;
  }
`;

export const HomeContentContainer = styled.div`
position: absolute;
transform: translateX(-50%) translateY(-50%);
display: flex;
justify-content: center;
flex-direction: column;
top: 40%;
left: 42%;
@media (max-width: 960px) {
  left: 50%;
  top: 45%;
}
`;

export const HeaderText = styled.h1`
font-size: 3rem;
font-weight: normal;
color: ${colors.whiteFontColors};
text-shadow: 10px 3px 10px rgba(36, 36, 36, 0.46);
@media (max-width: 960px) {
  font-size: 3rem;
}
@media (max-width: 720px) {
  font-size: 1rem;
}
`;

export const HeaderTitle = styled(HeaderText)`
  font-size: 2.2rem;
  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
  @media (max-width: 720px) {
    font-size: 1.3rem;
  }
`;

export const NameTitle = styled(HeaderText)`
  color: ${colors.mainFontColors};
  font-size: 5rem;
  @media (max-width: 960px) {
    font-size: 4rem;
  }
  @media (max-width: 720px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  text-shadow: 10px 3px 10px rgba(36, 36, 36, 0.46);
  font-size: 1.3rem;
  font-weight: normal;
  color: ${colors.whiteFontColors};
  @media (max-width: 960px) {
    font-size: 1.1rem;
  }
  @media (max-width: 370px) {
    font-size: 0.8rem;
  }
`;

export const SocialContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  bottom: 3.6%;
  left: 2%;
  @media (max-width: 960px) {
    top: 87%;
    left: 50%;
    flex-direction: row;
    transform: translateX(-50%) translateY(-50%);
    align-items: center;
    justify-content: center;
  }
`;

export const ContentLinkContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  top: 3.6%;
  right: 2.8%;
  @media (max-width: 960px) {
    display: none;
  }
`;
