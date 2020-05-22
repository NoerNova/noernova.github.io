import React from "react";
import logo from "../assets/images/logo.svg";
import "../App.scss";
import { getContent } from "@mui-treasury/layout";
import styled from "styled-components";

const Content = getContent(styled);
function Home() {
  return (
    <div className="App">
      <Content>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </Content>
    </div>
  );
}

export default Home;
