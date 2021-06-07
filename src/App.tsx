import React from "react";
import Routes from "./routes";
import { ThemeProvider } from 'styled-components';
import GlobalFonts from './styles/fonts'
import { theme } from './themes/theme'

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
