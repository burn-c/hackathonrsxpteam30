import React, {Component} from 'react';
import {toast} from 'react-toastify';

 import { Container } from './styles';

 //toast.configure();
export default class toastiError extends Component {

 
  notify =()=> {
    console.log('teste');
    toast.error('Error01');
    
    
  }


  render() {
    return (
      <Container>
       <div>
         <h1>Teste</h1>
        <button onClick={this.notify}>Notify !</button>
      </div> 
    </Container>
    );
  }
}

