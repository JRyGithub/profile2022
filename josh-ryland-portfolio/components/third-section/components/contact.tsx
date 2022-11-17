import React from 'react'
import styled from 'styled-components'
import EmailBox from './emailBox'
import Footer from './footer'
import ProfilePhoto from './profilePhoto'
import TextContainer from './textContainer'

type Props = {}

const Contact = (props: Props) => {
  const myLinks = {

  }
  return (
    <Container>
      <ProfilePhoto url='/josh-profile-photo.jpg'/>
      <TextContainer text='Feel free to reach out!' style={{fontSize: '1.5rem;', color: "#BB004B"}}/>
      <TextContainer text='You can reach me at nzryland@gmail.com or...'/>
      <EmailBox emailReceiver='nzryland@gmail.com' />
      <Footer links={myLinks}/>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  min-width: 250px;
  max-width: 500px;
  min-height: 350px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundTransparent};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: ${(props) => props.theme.transparentBorder};
  transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.01);
    /* box-shadow: ${props => props.theme.neonBoxShadow}; */
  }
  @media screen and (max-width: 600px) {
    padding: 10px;
  };
`