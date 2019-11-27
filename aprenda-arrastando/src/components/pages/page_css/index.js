
import React, { useState, useEffect } from 'react';
import {
  Exercise,
  Options,
  StyledDiv,
  StyledSection,
  Row,
  Footer,
  Reference, 
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
  Btn6
} from './styles_css';
import {toast} from 'react-toastify';
import Container from '../../atoms/container';
import { H1, P, Ol, Li } from '../../atoms/text';

export default function PageCss() {
  const [shadowStyle1, setStyle1] = useState(false);
  const [colorStyle2, setStyle2] = useState(false);
  const [fontStyle3, setStyle3] = useState(false);
  const [fontAlignStyle4, setStyle4] = useState(false);
  const [style5, setStyle5] = useState(false);
  const [style6, setStyle6] = useState(false);

  
  function handleStyle1() {
    setStyle1(!shadowStyle1);
  }
  function handleStyle2() {
    setStyle2(!colorStyle2);
  }
  function handleStyle3() {
    setStyle3(!fontStyle3);
  }
  function handleStyle4() {
    setStyle4(!fontAlignStyle4);
  }
  function handleStyle5() {
    setStyle5(!style5);
    if (!style5) toast.error("Ops, algo de errado não está certo...");
  }
  function handleStyle6() {
    setStyle6(!style6);
    if (!style6) toast.error("Ops, algo de errado não está certo...");
  }

  useEffect(() => {
    if (shadowStyle1 && colorStyle2 && fontStyle3 && fontAlignStyle4 && !style5 && !style6){
      toast.success("Parabéns, pode ir para o próximo nível!");
    };
  });

  return (
    <Container>
      <StyledSection>
      <Row>
        <StyledDiv margin padding shadow borderRadius width height>
          <H1>RSXP</H1>
          <P>Viva uma experiência única!</P>
          <Ol>
            <Li>foco no aprendizado</Li>
            <Li>foco na prática</Li>
            <Li>foco no resultado</Li>
          </Ol>
        </StyledDiv>
        <Exercise 
          shadowStyle1={shadowStyle1} 
          colorStyle2={colorStyle2}
          fontStyle3={fontStyle3}
          fontAlignStyle4={fontAlignStyle4}
          style5={style5}
          style6={style6}>
          <H1>RSXP</H1>
          <P>Viva uma experiência única!</P>
          <Ol>
            <Li>foco no aprendizado</Li>
            <Li>foco na prática</Li>
            <Li>foco no resultado</Li>
          </Ol>
        </Exercise>
      </Row>
      <Options>
        <Btn1 shadowStyle1={shadowStyle1} onClick={handleStyle1}>background-color</Btn1>
        <Btn2 colorStyle2={colorStyle2} onClick={handleStyle2}>color</Btn2>
        <Btn3 fontStyle3={fontStyle3} onClick={handleStyle3}>font-family</Btn3>
        <Btn4 fontAlignStyle4={fontAlignStyle4} onClick={handleStyle4}>align-text</Btn4>

        <Btn5 style5={style5} onClick={handleStyle5}>font-style</Btn5>
        <Btn6 style6={style6} onClick={handleStyle6}>text-transform</Btn6>
      </Options>
      </StyledSection>
    </Container>
  )
}



