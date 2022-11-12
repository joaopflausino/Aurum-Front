import React from 'react';
import { useEffect } from 'react';
import './registration.css';
import imagem1 from '../../shared/images/logo.png';

function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro"
 }, []);
  return (
    <>
      <header className='header'>
          <img src={imagem1} className='logo' alt="logo" />  
      </header> 
      <div className='main'>
        <div className='container'></div>
      </div>
    </>
  );
}

export default Cadastro;