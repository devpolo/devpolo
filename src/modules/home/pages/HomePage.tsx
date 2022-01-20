import styled from "styled-components"

import { Page } from "~/elements/containers"
import FlexLines from "../components/FlexLines"
import Line from "../components/Line"

const HomePage = () => {
  return (
    <Page>
      <Container>
        <div className='content'>
          <FlexLines>
            <Line color='green' />
            <Line color='transparent' />
          </FlexLines>
          <FlexLines>
            <Line color='green' w={18} />
            <Line color='gray' />
          </FlexLines>
          <FlexLines>
            <Line color='green' />
            <Line color='gray' w={7} />
            <Line color='transparent' w={6} />
          </FlexLines>
          <div className='introduction'>
            <h1>Paul Crussaire</h1>
            <h2>Freelance Developer</h2>
          </div>
          <FlexLines>
            <Line color='yellow' w={45} />
            <Line color='transparent' w={12} />
          </FlexLines>
          <FlexLines>
            <Line color='red' w={22} />
            <Line color='gray' w={28} />
            <Line color='transparent' />
          </FlexLines>
          <FlexLines>
            <Line color='gray' />
            <Line color='transparent' w={6} />
          </FlexLines>

          <FlexLines>
            <Line color='purple' w={60} />
            <Line color='gray' w={6} />
          </FlexLines>
        </div>
      </Container>
    </Page>
  )
}

const Container = styled.section`
  background: var(--dark);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .content {
    width: min(90%, 100rem);
    margin: auto;

    .introduction {
      padding: 1em 0 2em 0;

      h1 {
        color: var(--white);
        margin: 0;
      }

      h2 {
        color: var(--white);
        font-weight: normal;
        margin: 0;
      }
    }
  }
`

export default HomePage
