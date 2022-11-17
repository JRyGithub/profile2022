import React from 'react'
import styled from 'styled-components';

type Props = {
  style?: any;
  type: string;
  placeholder?: string;
};

type Input = {
  style?: any;
}
const Input = (props: Props) => {
  return (
    <InputContainer type={props.type} style={props.style} placeholder={props.placeholder}></InputContainer>
  )
}

export default Input;

const InputContainer = styled.input<Input>`
  width: inherit;
  color: ${props => props.theme.textColor};
  &::placeholder{
    color: ${props => props.theme.textColor};
    opacity: 0.5;
  }
  background-color: ${(props) => props.theme.backgroundTransparent};
  font-size: 1rem;
  font-weight: bold;
  border-style: solid;
  border-color: ${props => props.theme.textColor};
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border: solid ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryColor};
  }
  ${props => props.style ? props.style : ''};
`