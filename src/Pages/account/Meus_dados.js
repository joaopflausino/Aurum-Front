import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './account.css';

function MD() {
  useEffect(() => {
    document.title = "Meus dados"
 }, []);
  return (
    <>
    <Navbar/>
      <div className='main-md'>
        <div className='container-dados'>
          <h1 className='h1-meus-dados'>Meus Dados</h1>
          <div className='editar-foto'>
            

          </div>
          <div className='texto-e-input-md'>


          </div>
          <div className='texto-e-input-md'>


          </div>
          <div className='texto-e-input-md'>


          </div>
          <div className='texto-e-input-md'>


          </div>
          <button className='botao-salvar'>Salvar</button>
        </div>
      </div>
    </>
  );
}

export default MD;