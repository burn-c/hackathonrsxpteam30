import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './atoms/button';
import Container from './atoms/container';

const H1 = styled.h1`
color: #fff;
`;

function Index() {
  return (
    <Container>
        <Link to="/page_html">
          <a>
            <H1>Iniciar o aprendizado</H1>
          </a>
        </Link>
        <Button margin>HTML</Button>
        <Button margin>CSS</Button>
        <Button margin>Javascript</Button>
    </Container>
  );
}

export default Index;
