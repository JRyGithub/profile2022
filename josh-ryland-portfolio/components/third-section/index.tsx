
import React from 'react'
import styled from 'styled-components'
import Contact from './components/contact'
import LeftTopBlob from './components/leftTopBlob'
import MiddleBlob from './components/middleBlob'
import TopBlob from './components/topBlob'

type Props = {}

const ThirdSection = (props: Props) => {
  return (
    <Container>
      <TopBlob/>
      <MiddleBlob/>
      <LeftTopBlob/>
      <Contact/>
    </Container>
  )
}

export default ThirdSection

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`