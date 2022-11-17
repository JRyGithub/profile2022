import React from 'react'
import { GitHub, Linkedin } from 'react-feather'
import styled from 'styled-components'

type Props = {
  links: {}
}

const Footer = (props: Props) => {
  return (
    <Container>
      <A target="_blank" href='https://github.com/JRyGithub'><GitHub /></A>
      <A target="_blank" href='https://www.linkedin.com/in/joshua-ryland/'><Linkedin/></A>
    </Container>
  )
}

export default Footer

const Container = styled.div`
`
const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
  background: none;
  & > svg:hover {
    stroke: ${props => props.theme.secondaryColor};
  }
`