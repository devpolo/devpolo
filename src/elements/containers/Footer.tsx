import styled from "styled-components"

import { FULL_NAME } from "~/constants/text"

const Footer = () => {
  return (
    <Container>
      <p>
        © Copyright {new Date().getFullYear()}, {FULL_NAME}. All Rights
        Reserved.
      </p>
    </Container>
  )
}

const Container = styled.footer``

export default Footer
