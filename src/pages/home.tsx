import React from "react";
import logo from "../assets/images/logo.svg";
import { getContent } from "@mui-treasury/layout";
import styled, { keyframes } from "styled-components";

const Content = getContent(styled);

function Home() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  ro {
    transform: rotate(360deg);
  }
`;

  const SpinIcon = styled.div`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} 20s linear infinite;
  `;

  return (
    <Content>
      <div className="App">
        <header className="App-header">
          <SpinIcon>{() => <img src={logo} alt="logo" />}</SpinIcon>
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
        </header>
      </div>
    </Content>
  );
}

export default Home;
