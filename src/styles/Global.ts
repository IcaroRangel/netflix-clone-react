import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #141414;
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
  }
`;
