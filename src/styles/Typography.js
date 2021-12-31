import { createGlobalStyle } from 'styled-components';
import martel from '../assets/fonts/martel.woff';
import nunito from '../assets/fonts/nunito.woff';
import quando from '../assets/fonts/quando.woff';

const Typography = createGlobalStyle`

  @font-face {
    font-family: 'martel';
    src: url(${martel});
  }
  @font-face {
    font-family: 'nunito';
    src: url(${nunito});
  }
  @font-face {
    font-family: 'quando';
    src: url(${quando});
  }

  html {font-size: 62.5%;} /*10px*/

  body {
    background: white;
    font-family: "quando", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
  }

  p {margin-bottom: 1rem;}

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: "nunito", sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {font-size: 2.441rem;}

  h3 {font-size: 1.953rem;}

  h4 {font-size: 1.563rem;}

  h5 {font-size: 1.25rem;}

  small, .text_small {font-size: 0.8rem;}
`;

export default Typography;
