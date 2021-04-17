import React from "react";
import {
  Reset,
  FullScreen,
  NameTitleContainer,
  NameTitle,
  BackgroundImage,
  Description,
  SocialContainer,
} from "../styles/homeStyle";
import SocialLink from "../components/socialLink";
import { Contact } from "../pages";

function Home(): React.ReactElement {
  return (
    <>
      <Reset />
      <FullScreen>
        <BackgroundImage />
        <NameTitleContainer>
          <NameTitle>NorhsangPha</NameTitle>
          <Description>A Developer and Musician</Description>
        </NameTitleContainer>
        <SocialContainer>
          <SocialLink />
        </SocialContainer>
      </FullScreen>
      <Contact />
    </>
  );
}

export default Home;
