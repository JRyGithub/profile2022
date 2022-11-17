import React from 'react'
import styled from 'styled-components';
import SlideButton from '../../shared/slideButton';
import Input from './input';
import Submit from './submit';
import TextContainer from './textContainer';

type Props = {
  emailReceiver: string;
}

const EmailBox = (props: Props) => {
  const handleSubmit= (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    if(!email) return;
    console.log('This needs to be implemented so I can receive a email from ',email);
  }
  return (
    <Container>
      <TextContainer text="Drop your email below and I'll get back to you"/>
      <form onSubmit={handleSubmit}>
        <EmailBoxContainer>
          <InputContainer>
            <Input type="email" style={{ padding: "2px;" }} placeholder="Email"/>
          </InputContainer>
          <InputContainer>
            <Submit style={{ padding: "2px;" }}/>
          </InputContainer>
        </EmailBoxContainer>
      </form>
    </Container>
  )
}

export default EmailBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const EmailBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const InputContainer = styled.div`
  width: 100px;
`