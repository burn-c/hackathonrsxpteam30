import React from 'react'
import styled from 'styled-components';

import Container from '../atoms/container';


const StyledSection = styled.section`
width: 90%;
height: 50vh;
display: flex;
border-color: #fff;
border-style: solid;
justify-content: space-around;
align-items: center;
`;

const StyledDiv = styled.div`
color: #fff;
font-size: 20px;
`;

export default function PageHtml() {
  return (
    <Container>
      <StyledSection>
        <StyledDiv>
        <h1>RSXP</h1>
        <p>Viva uma experiência única!</p>
        <ul>
        <li>foco no aprendizado</li>
        <li>foco na prática</li>
        <li>foco no resultado</li>
    </ul>
    <footer>Credenciamento às 08:00</footer>
        </StyledDiv>
        <StyledDiv>Exercício</StyledDiv>
      </StyledSection>
    </Container>
  )
}
