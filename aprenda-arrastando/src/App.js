import React from 'react';
import './App.css';
import Routes from './routes';
import {ToastContainer} from 'react-toastify';
import GlobalStyle from './global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle/>
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
