import React from "react";
import "./App.scss";
import Routes from "./routes";
import NavBar from "./components/navbar";

import MenuIcon from "@material-ui/icons/Menu";

import {
  Toolbar,
  IconButton,
  StylesProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
} from "@mui-treasury/layout";
import styled from "styled-components";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", {
      anchor: "left",
    })
    .registerPermanentConfig("xs", {
      width: 100,
      collapsible: false,
    });
});

const Header = getHeader(styled);
const DrawsderSidebar = getDrawerSidebar(styled);

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <Root theme={theme} scheme={scheme}>
          <Routes />
          <CssBaseline />
          <Header>
            <NavBar />
          </Header>
          <DrawsderSidebar sidebarId={"primarySidebar"}>
            Sidebar
          </DrawsderSidebar>
        </Root>
      </StylesProvider>
    </div>
  );
}

export default App;
