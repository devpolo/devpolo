import { createGlobalStyle } from "styled-components"

import TypographyStyles from "./Typography.styles"
import ColorsStyles from "./Colors.styles"
export default createGlobalStyle`
  :root {
    ${ColorsStyles}
  }

  *,
  *::after, 
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    word-break: break-all;
    line-height: 1.4;
  }

  html {
    /* 1rem = 10px; */
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }

  img {
    height: auto;
    width: 100%;
  }

  ${TypographyStyles}
`
