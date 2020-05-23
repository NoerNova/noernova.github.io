import React from "react";
import Routes from "./routes";
import NavBar from "./components/navbar";
import { StylesProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
} from "@mui-treasury/layout";
import styled from "styled-components";
import SideBar from "./components/sidebar";

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
      width: 0,
      collapsible: true,
      collapsedWidth: 100,
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
    <div>
      <StylesProvider injectFirst>
        <Root theme={theme} scheme={scheme}>
          <Routes />
          <CssBaseline />
          <Header>
            <NavBar />
          </Header>
          <DrawsderSidebar sidebarId={"primarySidebar"}>
            <SideBar />
          </DrawsderSidebar>
        </Root>
      </StylesProvider>
    </div>
  );
}

export default App;
