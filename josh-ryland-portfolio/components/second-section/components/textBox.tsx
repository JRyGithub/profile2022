import React from 'react'
import styled from 'styled-components';

type Props = {
  text: string;
  selected: boolean;
}
type Container = {
  selected: boolean;
}
const TextBox = (props: Props) => {
  return (
    <Container selected={props.selected}>{props.text}</Container>
  )
}

const Container = styled.div<Container>`
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  min-width: 40%;
  background-color: ${(props) => props.theme.backgroundTransparent};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: ${(props) => props.theme.transparentBorder};
  border-radius: 4px;
  transition: .5s;
  opacity: ${props => props.selected ? 1 : .5};
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
`
export default TextBox