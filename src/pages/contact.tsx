import React from "react";
import styled from "styled-components";
import SocialLink from "../components/socialLink";
import colors from "../themes/colors";
import { Reset } from "../styles/homeStyle";

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
  padding-top: 5rem;
  font-family: "Kefa";
  font-weight: normal;
  color: ${colors.mainFontColors};
  @media (max-width: 600px) {
    font-size: 1.7em;
    padding-top: 0;
  }
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
