
import React from 'react'
import styled from 'styled-components'
import ContentContainer from './components/contentContainer'
import RightBlob from './components/rightBlob'
import LeftBlob from './components/leftBlob'

type Props = {}

const SecondSection = (props: Props) => {
  return (
    <Container>
      <RightBlob/>
      <LeftBlob/>
      <ContentContainer />
    </Container>
  )
}

export default SecondSection

const Container = styled.div`
  width: 100%;
  height: 100%;
`