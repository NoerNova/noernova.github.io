import React from "react";
import styled from "styled-components";
import colors from "../themes/colors";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Social = styled.a`
  font-family: "Kefa";
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.mainFontColors};
  padding: 15px;
  text-decoration: none;
  @media (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

const Split = styled.p`
  font-family: "Kefa";
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.mainFontColors};
  padding: 2px;
  @media (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

function SocialLink() {
  return (
    <>
      <Social href="https://www.facebook.com/noe.mtai" target="_blank">
        <FacebookIcon />
      </Social>
      <Split>·</Split>
      <Social href="https://www.instagram.com/b.norhsangpha/" target="_blank">
        <InstagramIcon />
      </Social>
      <Split>·</Split>
      <Social href="https://twitter.com/noer_nova" target="_blank">
        <TwitterIcon />
      </Social>
      <Split>·</Split>
      <Social href="https://www.linkedin.com/in/norhsangpha/" target="_blank">
        <LinkedInIcon />
      </Social>
    </>
  );
}

export default SocialLink;
