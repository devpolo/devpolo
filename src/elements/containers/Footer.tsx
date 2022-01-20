import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <p>
        © Copyright {new Date().getFullYear()}, Paul Crussaire. All Rights
        Reserved.
      </p>
    </Container>
  )
}

const Container = styled.footer``

export default Footer
