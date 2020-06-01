import React from "react";
import { Reset } from "../styles/homeStyle";
import {
  Box,
  ImageContainer,
  WorksContentContainer,
  WorksTitle,
  WorksContent,
  WorksPageContainer,
  CodingImg,
  FullScreen,
} from "../styles/worksPageStyle";
import codingImg from "../assets/images/carbonCode.png";
import rockerImg from "../assets/images/rocker.png";

function Works() {
  return (
    <>
      <Reset />
      <FullScreen>
        <WorksPageContainer>
          <Box />
          <ImageContainer>
            <CodingImg src={codingImg} />
          </ImageContainer>
          <WorksContentContainer>
            <WorksTitle>Source Code ...</WorksTitle>
            <WorksContent>
              Lacus varius incididunt, vulputate nulla ut proin nullam. Quam
              erat taciti at, posuere sit, mauris sit. Dignissim ante a quis,
              orci maecenas enim faucibus, mauris vestibulum consectetuer sit
              ut. Porttitor ac rutrum nam pellentesque. Vitae volutpat feugiat
              nostrud egestas enim suspendisse, faucibus vel duis vitae voluptas
              ac, sem metus. Vel ut. Turpis tellus dolor elementum, id eget
              congue, est luctus vitae mi urna maecenas magna. Arcu scelerisque
              montes quam maecenas, vehicula libero proin, libero in duis non,
              velit ut, id consequat.
            </WorksContent>
          </WorksContentContainer>
        </WorksPageContainer>
      </FullScreen>
    </>
  );
}

export default Works;
