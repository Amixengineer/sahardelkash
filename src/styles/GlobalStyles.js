import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #5F22D9;
    --secondary-color: #51D6CA;
    --grey: #e4e4e4;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
  }

`;

export default GlobalStyles;
