import styled from "styled-components"

import { IColors } from "~/types/theme"

interface ILine {
  color?: IColors
  width?: number
}

const Line = (props: ILine) => {
  return <Container {...props} />
}

const Container = styled.section<ILine>`
  background-color: ${(props) => `var(--${props.color || "gray"})`};
  height: 1rem;
  max-width: ${(props) => `${props.width || 10}rem`};

  margin: 0 1rem 1rem 0;
`

export default Line
