import styled from "styled-components"

const Intro = () => {
  return (
    <Container>
      <h1>Paul Crussaire</h1>
      <h2>Freelance Developer</h2>
    </Container>
  )
}

const Container = styled.section`
  min-height: 100vh;
  background: var(--dark);

  h1 {
    color: var(--white);
  }

  h2 {
    color: var(--white);
    font-weight: normal;
  }
`

export default Intro
