import styled from "styled-components"

import { EXTERNAL_GITHUB, EXTERNAL_LINKEDIN } from "~/constants/links"
import { FULL_NAME } from "~/constants/text"
import { Page } from "~/elements/containers"

import FlexLines from "../components/FlexLines"
import Line from "../components/Line"

const HomePage = () => {
  return (
    <Page title='Freelance Developer'>
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
            <h1>{FULL_NAME}</h1>
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
          <Line color='transparent' w={0} />
          <Line color='transparent' w={0} />

          <div className='social'>
            <a href={EXTERNAL_GITHUB} target='_blank'>
              <img src='/svg/github.svg' alt='' />
            </a>
            <a href={EXTERNAL_LINKEDIN} target='_blank'>
              <img src='/svg/linkedin.svg' alt='' />
            </a>
          </div>
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
    overflow: hidden;
    margin: 10rem auto;

    .introduction {
      padding: 1em 0 2em 0;

      h1 {
        color: var(--white);
        margin: 0 0 0.1em 0;
      }

      h2 {
        color: var(--white);
        font-weight: normal;
        margin: 0;
      }
    }

    .social {
      /* bottom: 1em;
      position: fixed;
      width: 100%;
      overflow: hidden; */

      img {
        height: 5rem;
        width: 5rem;
        margin-right: 2rem;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`

export default HomePage
