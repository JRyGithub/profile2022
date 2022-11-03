import Head from 'next/head'
import styled from 'styled-components'
import FirstSection from '../components/first-section'
import NavBar from '../components/shared/nav-bar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshfolio</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <SectionContainer className='sectionOne'>
        <FirstSection/>
      </SectionContainer>
      <SectionContainer className='blue'></SectionContainer>
      <SectionContainer className='green'></SectionContainer>
    </div>
  )
}

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 100px 20vw;
  &.sectionOne{
    background-color: ${(props) => props.theme.background};
  }
  &.green{
    background-color: green;
  }
  &.red{
    background-color: red;
  }
`
