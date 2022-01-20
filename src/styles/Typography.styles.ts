import { css } from "styled-components"

export default css`
  /* font imported in HTML */

  :root {
    /* link: https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

    --step--2: clamp(0.91rem, 0.89rem + 0.1vw, 0.96rem);
    --step--1: clamp(1.09rem, 1.05rem + 0.21vw, 1.2rem);
    --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.5rem);
    --step-1: clamp(1.58rem, 1.46rem + 0.59vw, 1.88rem);
    --step-2: clamp(1.89rem, 1.71rem + 0.89vw, 2.34rem);
    --step-3: clamp(2.27rem, 2.01rem + 1.29vw, 2.93rem);
    --step-4: clamp(2.72rem, 2.36rem + 1.83vw, 3.66rem);
    --step-5: clamp(3.27rem, 2.75rem + 2.56vw, 4.58rem);
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: normal;
    color: var(--black);
    font-size: var(--step-0);

    * {
      word-break: break-word;
    }
  }

  ::selection {
    /* highlight text color */
    /* background: var(); */
  }

  h1 {
    font-weight: 500;
    line-height: 1.1em;
    margin: 0 0 0.8em 0;
    font-family: "Poppins", sans-serif;
    font-size: var(--step-5);
    color: var(--black);
    word-break: break-word;

    * {
      line-height: 1.1em;
    }
  }

  h2,
  h3,
  h4 {
    margin: 0 0 1em 0;
  }

  h2 {
    font-size: var(--step-2);
  }

  h3 {
    font-size: var(--step-1);
  }

  h4 {
    font-size: var(--step-0);
  }

  p {
    font-size: var(--step-0);
    margin: 0;
    line-height: 1.5em;

    & + p {
      // for every p expect the first one
      margin-top: 1em;
    }
  }

  a {
    color: #146eeb;

    &:hover {
      /* text-decoration: underline; */
    }
  }

  button {
    word-break: break-word;
  }

  ul,
  ol {
    margin: 0.5rem 0 1rem;
    padding-inline-start: 2rem;
    list-style-type: none;
  }

  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin: 0;
  }
`
// link: https://github.com/davidhartsough/you-dont-need-bootstrap#5-css-for-typography
