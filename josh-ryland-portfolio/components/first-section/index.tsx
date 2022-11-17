import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Blob from './components/blob';
import Title from './components/title';

const MY_TITLE = "Hi, my names Josh";
const MY_FLUFF = "I'm a Developer."

const FirstSection = () => {
  return (
    <Container>
      <Title title={MY_TITLE} fluff={MY_FLUFF}/>
      <Blob/>
    </Container>
  );
};

export default FirstSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
`