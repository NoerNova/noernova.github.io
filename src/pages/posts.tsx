import React, { Component } from "react";
import { getContent } from "@mui-treasury/layout";
import styled from "styled-components";

const Content = getContent(styled);

function Posts() {
  return (
    <Content>
      <div className="App">
        <div className="App-header">
          <h1>Posts</h1>
        </div>
      </div>
    </Content>
  );
}

export default Posts;
