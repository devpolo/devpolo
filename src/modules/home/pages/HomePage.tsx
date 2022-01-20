import styled from "styled-components"

import { Page } from "~/elements/containers"
import FlexLines from "../components/FlexLines"
import Line from "../components/Line"

const HomePage = () => {
  return (
    <Page>
      <Container>
        <Line color='green' />
        <FlexLines>
          <Line color='green' w={18} />
          <Line color='gray' />
        </FlexLines>
        <FlexLines>
          <Line color='green' />
          <Line color='gray' w={7} />
        </FlexLines>
        <h1>Paul Crussaire</h1>
        <h2>Freelance Developer</h2>
        <Line color='yellow' w={45} />
        <FlexLines>
          <Line color='red' w={22} />
          <Line color='gray' w={28} />
        </FlexLines>
        <Line color='gray' />
        <FlexLines>
          <Line color='purple' w={60} />
          <Line color='gray' w={6} />
        </FlexLines>
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
