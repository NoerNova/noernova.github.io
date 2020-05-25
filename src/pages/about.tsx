import React from "react";
import useStyles from "../styles/pagesStyle";
import { getContent } from "@mui-treasury/layout";
import styled from "styled-components";

const Content = getContent(styled);

function About() {
  const styles = useStyles();

  return (
    <Content>
      <div className={styles.root}>
        <div className={styles.appHeader}>
          <h1>About</h1>
        </div>
      </div>
    </Content>
  );
}

export default About;
