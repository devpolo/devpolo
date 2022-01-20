import { FC } from "react"
import styled from "styled-components"

const FlexLines: FC = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: flex;
`

export default FlexLines
