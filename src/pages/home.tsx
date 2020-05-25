import React from "react";
import logo from "../assets/images/logo.svg";
import { getContent } from "@mui-treasury/layout";
import useStyles from "../styles/pagesStyle";
import styled, { keyframes } from "styled-components";

const Content = getContent(styled);

function Home() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const SpinIcon = styled.div`
    animation: ${rotate} 20s linear infinite;
  `;

  const styles = useStyles();

  return (
    <Content>
      <div className={styles.root}>
        <div className={styles.appHeader}>
          <SpinIcon>
            <img src={logo} className={styles.appLogo} alt="logo" />
          </SpinIcon>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </Content>
  );
}

export default Home;
