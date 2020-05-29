import React from "react";
import {
  BackgroundImage,
  ImageCorouselContainer,
  Image,
} from "../styles/aboutPageStyle";
import photoP1 from "../assets/images/me1.jpg";
import photoP2 from "../assets/images/me2.jpg";
import photoP3 from "../assets/images/me3.jpg";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const imageRender = () => {
  let images: Array<string> = [photoP1, photoP2, photoP3];

  return images.map((image) => <Image src={image} />);
};

function About() {
  return (
    <>
      <BackgroundImage />
      <ImageCorouselContainer>
        <Carousel dots centered autoPlay={5000} animationSpeed={2000} infinite>
          {imageRender()}
        </Carousel>
      </ImageCorouselContainer>
    </>
  );
}

export default About;
