import Head from 'next/head'
import styled from 'styled-components'
import FirstSection from '../components/first-section'
import SecondSection from '../components/second-section'
import NavBar from '../components/shared/nav-bar'
import ThirdSection from '../components/third-section'

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
      <SectionContainer id="section_one" className='sectionOne backgroundOne'>
        <FirstSection/>
      </SectionContainer>
      <SectionContainer id="section_two" className='sectionTwo backgroundTwo'>
        <SecondSection/>
      </SectionContainer>
      <SectionContainer id="section_three" className='sectionThree backgroundOne'>
        <ThirdSection/>
      </SectionContainer>
      {/* <SectionContainer id="section_four" className='sectionFour backgroundTwo'></SectionContainer> */}
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
  padding: 100px 10vw;
  &.backgroundOne{
    background-color: ${(props) => props.theme.background};
  }
  &.backgroundTwo{
    background-color: ${(props) => props.theme.backgroundTwo};
  }
`
