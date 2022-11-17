import React from 'react'
import styled from 'styled-components';

type Props = {
  style?: any;
};

type Input = {
  style?: any;
}

const Submit = (props: Props) => {
  return (
    <InputContainer type="submit" style={props.style}></InputContainer>
  )
}

export default Submit;

const InputContainer = styled.input<Input>`
  width: inherit;
  color: ${props => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  font-weight: bold;
  border-style: solid;
  border-color: ${props => props.theme.textColor};
  box-sizing: border-box;
  &:hover{
    cursor: pointer;
    border-color: ${(props) => props.theme.secondaryColor};;
    color:  ${(props) => props.theme.textColor};;
    background-color: ${(props) => props.theme.secondaryColor};;
    transition: background-color 500ms linear;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;     
  };
  ${props => props.style ? props.style : ''};
`