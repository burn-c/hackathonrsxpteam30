import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './atoms/button';
import Container from './atoms/container';
import ContainerButton from './atoms/containerbutton';
import TextList from './atoms/textlist';
import { MdDoNotDisturb } from 'react-icons/md';

const H1 = styled.h1`
color: #fff;
`;

function Index() {
  return (
    <Container>
      <ContainerButton>
        <Link to="/page_html">
          <a>
            <Button>Iniciar o aprendizado</Button>
          </a>
        </Link>
      </ContainerButton>

        <TextList>
          <h1>Desafios</h1>
          <ul>
          <li><MdDoNotDisturb color="#f01010" /> HTML</li>     
          <li><MdDoNotDisturb color="#f01010" /> CSS</li>    
          <li><MdDoNotDisturb color="#f01010" /> Javascript</li>
          </ul>
        </TextList>
    </Container>
  );
}

export default Index;
