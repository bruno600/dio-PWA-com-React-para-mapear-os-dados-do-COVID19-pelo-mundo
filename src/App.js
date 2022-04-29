import React from "react";
import { ThemeProvider } from '@mui/material'
import GlobalStyle from "./commons/styles/global-style";
import Main from './containers/Main'

function App() {
  return (
    <div>
      {/* <CssBaseline /> */}
      <GlobalStyle />

      <Main />

    </div>
  );
}

export default App;
