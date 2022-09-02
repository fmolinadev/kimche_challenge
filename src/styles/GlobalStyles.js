import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: #1d1d1b;
    max-width: 1400px;
  }
  body {
    margin: auto;
  }
h1, h2, h3{
  font-family: 'Roboto', sans-serif;
  &::selection {
    background: #f5ae16;
    color: #1d1d1b;
  }
}
h4, h5,h6, p {
  font-family: 'Source Sans Pro', sans-serif;
  &::selection {
    background: #62c3d2;
    color: #1d1d1b;
  }
} 
span {
  &::selection {
    background: #62c3d2;
    color: #1d1d1b;
  }
}
`;

export default GlobalStyle;
