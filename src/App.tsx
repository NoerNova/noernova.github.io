import React from "react";
import Routes from "./routes";
import { StylesProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import Layout, { Root }  from "@mui-treasury/layout";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

function App(): React.ReactElement {
  return (
    <div>
      <StylesProvider injectFirst>
        <Root theme={theme} scheme={scheme}>
          <Routes />
          <CssBaseline />
        </Root>
      </StylesProvider>
    </div>
  );
}

export default App;
