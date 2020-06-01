import React from "react";
import styled from "styled-components";
import SocialLink from "../components/socialLink";
import Container from "@material-ui/core/Container";
import colors from "../themes/colors";
import { Reset, FullScreen } from "../styles/homeStyle";

const ContactPageContainer = styled.div`
  background: ${colors.mainBackgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ContactContent = styled.h1`
  font-family: "Kefa";
  font-weight: normal;
  color: ${colors.mainFontColors};
`;

function Contact() {
  return (
    <>
      <Reset />
      <ContactPageContainer>
        <ContactContent>norhsangpha@gmail.com</ContactContent>
        <SocialContainer>
          <SocialLink />
        </SocialContainer>
      </ContactPageContainer>
    </>
  );
}

export default Contact;
