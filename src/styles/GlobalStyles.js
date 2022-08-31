import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: black;
    max-width: 1400px;
  }
  body {
    margin: auto;
  }
`;

export default GlobalStyle;
