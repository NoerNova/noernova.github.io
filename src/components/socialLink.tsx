import React from "react";
import styled from "styled-components";
import colors from "../themes/colors";

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
        f
      </Social>
      <Split>·</Split>
      <Social href="https://www.instagram.com/b.norhsangpha/" target="_blank">
        ig
      </Social>
      <Split>·</Split>
      <Social href="https://twitter.com/noer_nova" target="_blank">
        t
      </Social>
      <Split>·</Split>
      <Social href="https://www.linkedin.com/in/norhsangpha/" target="_blank">
        in
      </Social>
    </>
  );
}

export default SocialLink;
