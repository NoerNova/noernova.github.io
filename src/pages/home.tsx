import React from "react";
import {
  Reset,
  FullScreen,
  NameTitleContainer,
  NameTitle,
  Gradient,
  BackgroundImage,
  Description,
  SocialContainer,
} from "../styles/homeStyle";
import SocialLink from "../components/socialLink";
import { About, Blogs, Works, Contact } from "../pages";

function Home() {
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
    </>
  );
}

export default Home;
