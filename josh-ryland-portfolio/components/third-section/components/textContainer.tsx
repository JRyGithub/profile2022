import React from 'react'
import styled from 'styled-components';

type Props = {
  text: string;
  style?: any;
}
type text = {
  style?: any;
}
const TextContainer = (props: Props) => {
  return (
    <Container style={props.style}>
      {props.text}
    </Container>
  )
}

export default TextContainer;

const Container = styled.div<text>`
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  text-align: center;
  ${props => props.style ? props.style : ''}
`