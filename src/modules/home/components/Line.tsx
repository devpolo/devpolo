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
  height: 1rem;
  width: ${(props) => `${props.w || 32}rem`};

  margin: 0 1rem 1rem 0;
`

export default Line
