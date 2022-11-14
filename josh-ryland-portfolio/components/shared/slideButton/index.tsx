import React from 'react'
import styled from 'styled-components';

type Props = {
  text: string;
  onClick?: () => void;
  url?: string;
}

const SlideButton = (props: Props) => {
  return (
    <Button href={props.url} onClick={props.onClick} >{props.text}</Button>
  )
}

export default SlideButton

const Button = styled.a`
  width: fit-content;
  scroll-behavior: smooth;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border-style: solid;
  padding: 0.4rem 0.5em;
  border-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.secondaryColor};
  &:hover{
    cursor: pointer;
    border-color: ${(props) => props.theme.secondaryColor};;
    color:  ${(props) => props.theme.textColor};;
    background-color: ${(props) => props.theme.secondaryColor};;
    transition: background-color 500ms linear;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;     
  }
`