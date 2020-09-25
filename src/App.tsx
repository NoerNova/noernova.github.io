import React from "react";
import Routes from "./routes";
import NavBar from "./components/navbar";
import { StylesProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import Layout, { Root, getHeader } from "@mui-treasury/layout";
import styled from "styled-components";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

const Header = getHeader(styled);

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <div>
      <StylesProvider injectFirst>
        <Root theme={theme} scheme={scheme}>
          <NavBar />
          <Routes />
          <CssBaseline />
        </Root>
      </StylesProvider>
    </div>
  );
}

export default App;
