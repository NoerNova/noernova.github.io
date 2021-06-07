import React from "react";
import styled from "styled-components";
import colors from "../themes/colors";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

const Social = styled.a`
  font-family: 'Arial Rounded MT';
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.mainFontColors};
  padding-left: 15px;
  text-decoration: none;
  @media (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

function SocialLink(): JSX.Element {
  return (
    <>
      <Social href="https://www.facebook.com/noe.mtai" target="_blank">
        <FacebookIcon />
      </Social>
      <Social href="https://www.instagram.com/b.norhsangpha/" target="_blank">
        <InstagramIcon />
      </Social>
      <Social href="https://twitter.com/noer_nova" target="_blank">
        <TwitterIcon />
      </Social>
      <Social href="https://www.linkedin.com/in/norhsangpha/" target="_blank">
        <LinkedInIcon />
      </Social>
      <Social href="https://www.github.com/noernova" target="_blank">
        <GithubIcon />
      </Social>
    </>
  );
}

export default SocialLink;
