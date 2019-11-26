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
background-color: #fff;
flex-direction: column;
`;

const Row = styled.div`
flex-direction: row;
`;

const Column = styled.div`
flex-direction: column;
`;

const StyledDiv = styled.div`
margin: ${({ margin }) => (margin && '10px')};
padding: ${({ padding }) => (padding && '20px')};
box-shadow: ${({ shadow }) => ( shadow && '0px 0px 15px 0px #888888' )};
border-radius: ${({ borderRadius }) => ( borderRadius && '5px')} ;
color: gray;
`;

export default function PageHtml() {
  return (
    <Container>
      <StyledSection>
      <Row>
        <h1>Quais elementos estão presentes na caixa abaixo:</h1>
      </Row>
      <Row>
        <StyledDiv black>
          <StyledDiv margin padding shadow borderRadius>
            <h1>RSXP</h1>
            <p>Viva uma experiência única!</p>
            <ul>
              <li>foco no aprendizado</li>
              <li>foco na prática</li>
              <li>foco no resultado</li>
            </ul>
            <footer>Credenciamento às 08:00</footer>
          </StyledDiv>
        </StyledDiv>
        <StyledDiv>
          <input type="checkbox" />{(`<h1>`)}
          <input type="checkbox" />{(`<p>`)}
          <input type="checkbox" />{(`<ul>`)}
          <input type="checkbox" />{(`<li>`)}
          <input type="checkbox" />{(`<footer>`)}
          <input type="checkbox" />{(`<img>`)}
        </StyledDiv>
      </Row>
      </StyledSection>
    </Container>
  )
}
