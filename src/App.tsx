import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import defaultTheme from './styles/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
