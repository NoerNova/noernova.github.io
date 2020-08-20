import React from "react";
import { Reset, FullScreen } from "../styles/homeStyle";
import {
  Box,
  ImageCorouselContainer,
  AboutContentContainer,
  AboutTitle,
  AboutContent,
  AboutPageContainer,
} from "../styles/aboutPageStyle";
import photoP1 from "../assets/images/me1.jpg";
import photoP2 from "../assets/images/me2.jpg";
import photoP3 from "../assets/images/me3.jpg";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: photoP1,
  },
  {
    original: photoP2,
  },
  {
    original: photoP3,
  },
];

function About() {
  return (
    <>
      <Reset />
      <AboutPageContainer>
        <AboutContentContainer>
          <AboutTitle>In development...</AboutTitle>
          {/* <Box />
        <ImageCorouselContainer>
          <ImageGallery
            items={images}
            autoPlay
            showThumbnails={false}
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            showBullets
          />
        </ImageCorouselContainer>
        <AboutContentContainer>
          <AboutTitle>I me my mind ...</AboutTitle>
          <AboutContent>
            Hello, My name is NorHsangPha (Nor-Hsang-Pha), I'm a Computer
            Science Graduate from Payap University Chiangmai (Thailand). I'm in
            a rock band as a solo guitarist, songs composer and mixing song in
            home studio. I like to call myself a developer, I love to develop my
            skills, knowledge, and my soul with my fast learning skills. Love
            code, Love cat, Love coffee.
          </AboutContent>
        </AboutContentContainer> */}
        </AboutContentContainer>
      </AboutPageContainer>
    </>
  );
}

export default About;
