import React, { Component } from 'react'
import { toast } from 'react-toastify';


import Container from '../../atoms/container';
import { H1, P, Ol, Li } from '../../atoms/text';
import { Row, StyledSection, StyledDiv, Label, Footer } from './styles';
<<<<<<< HEAD
import Rankhook from '../../ranking/rankingHTML';
import styled from 'styled-components';
=======
import {
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
  Btn6
} from '../page_css/styles_css';
>>>>>>> master

const Row2 = styled.div`
  display:flex;
  flex-direction:row;
`;
class PageHtml extends Component {
  state = {
    isH1: null,
    isP: false,
    isImg: false,
    isFooter: false,
    isLi: false,
    isUl: false,
  }
  
  handleCheckH1 = (e) => {
    this.setState({ isH1: true });
    toast.success("Parabéns, continue assim!");
  }

  handleCheckP = () => {
    this.setState({ isP: true });
    toast.success("Parabéns, continue assim!");
  }

  handleCheckImg = () => {
    this.setState({ isImg: true })
    toast.error("Ops, parece que não temos uma imagem...");
  }

  handleCheckFooter = () => {
    this.setState({ isFooter: true });
    toast.success("Parabéns, continue assim!");
  }

  handleCheckLi = () => {
    this.setState({ isLi: true });
    toast.success("Parabéns, continue assim!");
  }

  handleCheckUl = () => {
    this.setState({ isUl: true });
    toast.success("Parabéns, continue assim!");
  }


  render() {
    return (
      <Container>
        <Row2>
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
              <Btn1
                onClick={this.handleCheckUl}
              >{(`<ul>`)}
              </Btn1>
            </Label>

            <Label>
              <Btn2 type="checkbox" onClick={this.handleCheckP}>{(`<p>`)}
              </Btn2>
            </Label>

            <Label>
              <Btn3 type="checkbox" onClick={this.handleCheckImg}>{(`<img>`)}
              </Btn3>
            </Label>

            <Label>
              <Btn4 type="checkbox" onClick={this.handleCheckFooter}>{(`<footer>`)}
              </Btn4>
            </Label>

            <Label>
              <Btn5 type="checkbox" onClick={this.handleCheckLi}>{(`<li>`)}
              </Btn5>
            </Label>

            <Label>
              <Btn6 onClick={this.handleCheckH1}>
              {(`<h1>`)}
              </Btn6>
          </Label>
        </Row>
        </StyledSection>
        <Rankhook/>
        </Row2>
      
      </Container>
    )
  }
}

export default PageHtml;