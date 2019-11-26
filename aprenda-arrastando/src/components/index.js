import React from 'react';
import { Link } from 'react-router-dom';

import Button from './atoms/button';

function Index() {
  return (
    <div>
      <header>
        <Link to="/page_html">
          <a>
            Iniciar o aprendizado
          </a>
        </Link>
        <Button>HTML</Button>
        <Button>CSS</Button>
        <Button>Javascript</Button>
      </header>
    </div>
  );
}

export default Index;
