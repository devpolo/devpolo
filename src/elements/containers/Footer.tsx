import styled from "styled-components"

const Footer = () => {
  return (
    <Container backgroundColor='zpecialGreen1' color='lime900'>
      <p>
        © Copyright {new Date().getFullYear()}, Paul Crussaire. All Rights
        Reserved.
      </p>
    </Container>
  )
}

const Container = styled.footer``

export default Footer
