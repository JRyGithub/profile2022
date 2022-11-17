import React from 'react'
import styled from 'styled-components';

type Props = {
  url: string;
}

const ProfilePhoto = (props: Props) => {
  return (
    <ImageContainer>
      <Image alt='profilePhoto' src={props.url}/>
    </ImageContainer>
  )
}

export default ProfilePhoto

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  border-radius: 100%;
  border: 4px solid ${(props) => props.theme.secondaryColor};
`
const Image = styled.img`
  max-height: 125px;
  max-width: 125px;
  border-radius: 125px;
  padding: 10px;
  object-fit: cover;
`