import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #141414;
    font-size: 1.1rem;
    font-family: 'Roboto', sans-serif;
    color: white;
  }
  a {
    text-decoration: none;
  }
`;
