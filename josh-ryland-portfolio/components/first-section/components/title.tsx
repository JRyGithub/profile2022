import React from 'react';
import styled from 'styled-components';
import SlideButton from '../../shared/slideButton';

const Title = ({title,fluff}) => {
  return (
    <Container>
      <H1>
       {title}
       <br />
       {fluff}
      </H1>
      <SlideButton url={'#section_two'} text={'Discover more'}/>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  position: absolute;
  left: 5vw;
  right:1vw;
  top: 15vh;
  @media screen and (max-width: 600px) {
    top: 40%;
  }
`

const H1 = styled.div`
  font-size: 4rem;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 10vw;
  };
  color: ${(props) => props.theme.textColor};
  text-shadow: .75px .75px 2.5px ${(props) => props.theme.textColor};,-0.5px .25px 5px ${(props) => props.theme.textColor};  
`