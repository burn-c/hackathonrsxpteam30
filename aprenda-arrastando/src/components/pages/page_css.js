import React, { useState } from 'react';
import { Container, Reference, Exercise, Options } from './styles_css';
import {toast} from 'react-toastify';
import RankCSS from '../ranking/rankingCSS';


export default function PageCss() {
  const [style1, setStyle1] = useState(false);
  const [style2, setStyle2] = useState(false);
  const [style3, setStyle3] = useState(false);
  const [style4, setStyle4] = useState(false);
  const [style5, setStyle5] = useState(false);
  const [style6, setStyle6] = useState(false);

  
  function handleStyle1() {
    setStyle1(!style1);
  }
  function handleStyle2() {
    setStyle2(!style2);
  }
  function handleStyle3() {
    setStyle3(!style3);
  }
  function handleStyle4() {
    setStyle4(!style4);
  }
  function handleStyle5() {
    setStyle5(!style5);
  }
  function handleStyle6() {
    setStyle6(!style6);
  }

  function handleCorrection() {
    if (style1 && style2 && style3 && style4){
     // alert("Acertou");
      toast('PARABÉNS - Vá para o Próximo nível');

    }
    else {
      alert("Errou");
    }
  }

  return (
    <Container>
      <Reference>
      <h1>RSXP</h1>
      <p>Viva uma experiência única!</p>
      <ul>
          <li>foco no aprendizado</li>
          <li>foco na prática</li>
          <li>foco no resultado</li>
      </ul>
      <footer>Credenciamento às 08:00</footer>
    </Reference>

    <Exercise 
      style1={style1} 
      style2={style2}
      style3={style3}
      style4={style4}
      style5={style5}
      style6={style6}>
      <h1>RSXP</h1>
      <p>Viva uma experiência única!</p>
      <ul>
          <li>foco no aprendizado</li>
          <li>foco na prática</li>
          <li>foco no resultado</li>
      </ul>
      <footer>Credenciamento às 08:00</footer>
    </Exercise>
    <Options>
      <button onClick={handleStyle1}>background-color</button>
      <button onClick={handleStyle2}>color</button>
      <button onClick={handleStyle3}>font-family</button>
      <button onClick={handleStyle4}>align-text</button>

      <button onClick={handleStyle5}>font-style</button>
      <button onClick={handleStyle6}>text-transform</button>
      
      <button onClick={handleCorrection}>Enviar</button>
    </Options>
    <RankCSS/>
    </Container>
    
  )
}
