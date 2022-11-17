import React, { useState } from 'react'
import styled from 'styled-components';
import { projects } from '../../../Resources/projects';
import TextBox from './textBox';

type Props = {
  selected: number;
  setSelected: (index: number) => void;
}
type clickContainer = {
  selected: boolean;
}
const TextContainer = (props: Props) => {
  return (
    <Container>
      {
        projects.map((project,index) => {
          return ( 
          <ClickContainer key={index} onClick={() => props.setSelected(index)} selected={index === props.selected}>
            <TextBox key={index}text={project.text} selected={index === props.selected}/>
          </ClickContainer>)
        })
      }
    </Container>
  )
}

export default TextContainer;

const Container = styled.div`
  min-width: 200px;
  gap: 10px;
  width: 60%;
  height: 80%;
  flex: 1 1 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 800px) {
    height: 40%;
  }
`

const ClickContainer = styled.div<clickContainer>`
  @media screen and (max-width: 850px) {
    display: ${(props) => props.selected ? 'block' : 'none'};
  }
`