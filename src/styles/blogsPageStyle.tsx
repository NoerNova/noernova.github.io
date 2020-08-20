import styled from "styled-components";
import colors from "../themes/colors";

export const PageContainer = styled.div`
  flex-grow: 1;
`;

export const BlogsCardContainer = styled.div`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const CategoryContainer = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-left: 10%;
  margin-top: 5%;
`;

export const BlogTitle = styled.h2`
  font-family: "Kefa";
  font-size: 2rem;
  color: ${colors.mainFontColors};
  padding: 2rem 0 2rem 0;
  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
  @media (max-width: 840px) {
    font-size: 1.5rem;
  }
`;
