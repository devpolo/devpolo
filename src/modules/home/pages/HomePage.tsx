import styled from "styled-components"

import { Page } from "~/elements/containers"
import Line from "../components/Line"

const HomePage = () => {
  return (
    <Page>
      <Container>
        <Line color='green' />
        <Line color='green' />
        <Line color='gray' />
        <h1>Paul Crussaire</h1>
        <h2>Freelance Developer</h2>
      </Container>
    </Page>
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

export default HomePage
