import React, { Component } from "react";
import useStyles from "../styles/pagesStyle";
import { getContent } from "@mui-treasury/layout";
import styled from "styled-components";

const Content = getContent(styled);

function Project() {
  const styles = useStyles();

  return (
    <Content>
      <div className={styles.root}>
        <div className={styles.appHeader}>
          <h1>Project</h1>
        </div>
      </div>
    </Content>
  );
}

export default Project;
