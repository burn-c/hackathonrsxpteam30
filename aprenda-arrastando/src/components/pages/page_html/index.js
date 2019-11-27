import React, { Component } from 'react'

import Container from '../../atoms/container';
import { H1, P, Ol, Li } from '../../atoms/text';
import { Row, StyledSection, StyledDiv, Label, Footer } from './styles';

class PageHtml extends Component {
  state = {}
  
  handleCheckH1 = () => {
    console.log('cliquei')
  }

  render() {
    return (
      <Container>
        <StyledSection>
        <Row>
          <H1>Quais elementos estão presentes na caixa abaixo:</H1>
        </Row>
          <StyledDiv margin padding shadow borderRadius width height>
            <H1>RSXP</H1>
            <P>Viva uma experiência única!</P>
            <Ol>
              <Li>foco no aprendizado</Li>
              <Li>foco na prática</Li>
              <Li>foco no resultado</Li>
            </Ol>
            <Footer>Credenciamento às 08:00</Footer>
          </StyledDiv>
          <Row>
            <Label>
              <input type="checkbox" onChange={() => null} />{(`<h1>`)}
            </Label>
            <Label>
              <input type="checkbox" onChange={() => null} />{(`<p>`)}
            </Label>
            <Label>
              <input type="checkbox" onChange={() => null} />{(`<ul>`)}
            </Label>
            <Label>
              <input type="checkbox" onChange={() => null} />{(`<li>`)}
            </Label>
            <Label>
              <input type="checkbox" onChange={() => null} />{(`<footer>`)}
            </Label>
            <Label>
              <input type="checkbox" onChange={() => null} />{(`<img>`)}
            </Label>
          </Row>
        </StyledSection>
      </Container>
    )
  }
}

export default PageHtml;