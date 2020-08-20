import React from "react";
import { Reset } from "../styles/homeStyle";
import codingImg from "../assets/images/carbonCode.png";
import rockerImg from "../assets/images/rocker.png";
import {
  WorkPageContainer,
  Box,
  SecondBox,
  CodingImg,
  RockingImg,
  WorkContentContainer,
  SecondWorkContentContainer,
  WorkContentTitle,
  WorkContentParagraph,
} from "../styles/worksPageStyle";

function Works() {
  return (
    <>
      <Reset />
      <WorkPageContainer>
        {/* <Box />
        <CodingImg src={codingImg} />
        <WorkContentContainer>
          <WorkContentTitle>Source Code</WorkContentTitle>
          <WorkContentParagraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            laudantium eum quasi, similique doloremque vitae quos itaque alias
            reiciendis reprehenderit, nam ullam ad quaerat repudiandae esse!
            Repudiandae quo ea est.
          </WorkContentParagraph>
          <WorkContentParagraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            laudantium eum quasi, similique doloremque vitae quos itaque alias
            reiciendis reprehenderit, nam ullam ad quaerat repudiandae esse!
            Repudiandae quo ea est.
          </WorkContentParagraph>
        </WorkContentContainer>
      </WorkPageContainer>
      <WorkPageContainer>
        <SecondBox />
        <RockingImg src={rockerImg} />
        <SecondWorkContentContainer>
          <WorkContentTitle>Let's rock</WorkContentTitle>
          <WorkContentParagraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            laudantium eum quasi, similique doloremque vitae quos itaque alias
            reiciendis reprehenderit, nam ullam ad quaerat repudiandae esse!
            Repudiandae quo ea est.
          </WorkContentParagraph>
          <WorkContentParagraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            laudantium eum quasi, similique doloremque vitae quos itaque alias
            reiciendis reprehenderit, nam ullam ad quaerat repudiandae esse!
            Repudiandae quo ea est.
          </WorkContentParagraph>
        </SecondWorkContentContainer> */}
        <WorkContentTitle>In development ...</WorkContentTitle>
      </WorkPageContainer>
    </>
  );
}

export default Works;
