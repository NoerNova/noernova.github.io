import React, { useState, useRef } from "react";
import {
  Reset,
  FullScreen,
  HeaderTitle,
  NameTitle,
  Description,
  HomeContentContainer,
  BackgroundImage,
  SocialContainer,
  ContentLinkContainer,
  Logo,
} from "../styles/homeStyle";
import SocialLink from "../components/socialLink";
import ContentLink from "../components/contentLink";
import Burger from "../components/burger";
import Menu from "../components/menu";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../helper/burger_hook";

function Home(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const node = useRef<HTMLElement>(null);
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Reset />
      <FullScreen>
        <Logo>@noernova</Logo>
        <FocusLock disabled={!open} ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
        <BackgroundImage />
        <HomeContentContainer>
          <HeaderTitle>{"Hello World!. I'm Noe Noe,"}</HeaderTitle>
          <NameTitle>NorHsangPha</NameTitle>
          <Description>
            {`A developer musician, guitarist, and song composer.`}
          </Description>
        </HomeContentContainer>
        <ContentLinkContainer>
          <ContentLink />
        </ContentLinkContainer>
        <SocialContainer>
          <SocialLink />
        </SocialContainer>
      </FullScreen>
    </>
  );
}

export default Home;
