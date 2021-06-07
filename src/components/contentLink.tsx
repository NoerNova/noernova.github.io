import React from "react";
import styled from "styled-components";
import colors from "../themes/colors";
import { NavLink } from 'react-router-dom';

const Content = styled.a`
  font-family: 'Arial Rounded MT';
  font-size: 1.1rem;
  font-weight: normal;
  color: ${colors.mainFontColors};
  text-decoration: none;
  &:hover {
  }
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding-top: 10px;
`;

function ContentLink(): JSX.Element {
  return (
    <>
      <Link
        to="bio"
      >
        <Content>Bio</Content>
      </Link>
      <Link
        to="blogs"
      >
      <Content>Blogs</Content>
      </Link>
      <Link
        to="software"
        style={{ textDecoration: 'none'}}
      >
      <Content href="#">Software</Content>
      </Link>
    </>
  );
}

export default ContentLink;
