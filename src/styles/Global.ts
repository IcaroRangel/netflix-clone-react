import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }
  button{
    cursor: pointer;
  }
  body{
    background: #141414;
    font-family: 'Roboto', sans-serif;
    color: white;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
`;
