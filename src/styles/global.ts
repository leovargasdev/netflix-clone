import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #000;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.red};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.red};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.primary};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, a {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
