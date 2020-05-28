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
  Social,
  Split,
} from "../styles/homeStyle";

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
          <Social href="https://www.facebook.com/noe.mtai" target="_blank">
            f
          </Social>
          <Split>·</Split>
          <Social
            href="https://www.instagram.com/b.norhsangpha/"
            target="_blank"
          >
            ig
          </Social>
          <Split>·</Split>
          <Social href="https://twitter.com/noer_nova" target="_blank">
            t
          </Social>
          <Split>·</Split>
          <Social
            href="https://www.linkedin.com/in/norhsangpha/"
            target="_blank"
          >
            in
          </Social>
        </SocialContainer>
      </FullScreen>
    </>
  );
}

export default Home;
