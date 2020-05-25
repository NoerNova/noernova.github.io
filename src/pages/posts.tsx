import React, { Component } from "react";
import { getContent } from "@mui-treasury/layout";
import styled from "styled-components";
import useStyles from "../styles/pagesStyle";

const Content = getContent(styled);

function Posts() {
  const styles = useStyles();

  return (
    <Content>
      <div className={styles.root}>
        <div className={styles.appHeader}>
          <h1>Posts</h1>
        </div>
      </div>
    </Content>
  );
}

export default Posts;
