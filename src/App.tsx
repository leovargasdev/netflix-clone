import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <h1>Netflix - UI Clone</h1>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
