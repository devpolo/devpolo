import { css } from "styled-components"

import { theme } from "./theme"

function generatedColors() {
  let styles = ""

  for (const color in theme.colors) {
    // @ts-ignore
    styles += `--${color}: ${theme.colors[color]};`
  }

  return css`
    ${styles}
  `
}

export default generatedColors()
