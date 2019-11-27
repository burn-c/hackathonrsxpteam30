import React, { useState, useEffect } from 'react';
import { Container, Reference, Exercise, Options } from './styles_css';
import {toast} from 'react-toastify';

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
    if (!style5) toast.error("Ops, algo de errado não está certo...");
  }
  function handleStyle6() {
    setStyle6(!style6);
    if (!style6) toast.error("Ops, algo de errado não está certo...");
  }

  useEffect(() => {
    if (style1 && style2 && style3 && style4 && !style5 && !style6){
      toast.success("Parabéns, pode ir para o próximo nível!");
    };
  });

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
      <button className="teste" oi={style1} onClick={handleStyle1}>background-color</button>
      <button onClick={handleStyle2}>color</button>
      <button onClick={handleStyle3}>font-family</button>
      <button onClick={handleStyle4}>align-text</button>

      <button onClick={handleStyle5}>font-style</button>
      <button onClick={handleStyle6}>text-transform</button>
      
    </Options>
    </Container>
    
  )
}
