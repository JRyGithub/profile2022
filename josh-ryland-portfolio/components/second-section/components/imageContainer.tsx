import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { projects } from '../../../Resources/projects';

type Props = {
  selected: number;
}

const ImageContainer = (props: Props) => {
  return (
    <Container className='image-wrapper'>
       <Image objectFit='cover' alt="image" layout='fill' src={projects[props.selected].image}/>
    </Container>
  )
}

export default ImageContainer;

const Container = styled.div`
  margin: auto;
  border: ${(props) => props.theme.transparentBorder};
  border-radius: 4px;
  min-width: 200px;
  max-width: 500px;
  width: 30%;
  height: 80%;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 40%;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &.image-wrapper > * {
    border-radius: 4px;
  }
`