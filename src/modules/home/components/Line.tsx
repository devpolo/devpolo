import styled from "styled-components"

import { IColors } from "~/types/theme"

interface ILine {
  color?: IColors
  w?: number
}

const Line = (props: ILine) => {
  return <Container {...props} />
}

const Container = styled.div<ILine>`
  background-color: ${(props) => `var(--${props.color || "gray"})`};
  width: ${(props) => `${props.w || 32}rem`};
  height: 1em;
  margin: 0 1.2em 1.2em 0;
  border-radius: 1em;
`

export default Line
