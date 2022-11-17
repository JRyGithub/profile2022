import React, { useState } from 'react'
import styled from 'styled-components'
import ImageContainer from './imageContainer'
import TextContainer from './textContainer'


type Props = {}

const ContentContainer = (props: Props) => {
  const [selected,setSelected] = useState(0);
  return (
    <Container>
      <ImageContainer selected={selected}/>
      <TextContainer selected={selected} setSelected={setSelected}/>
    </Container>
  )
}

export default ContentContainer

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  z-index: 1000;
`