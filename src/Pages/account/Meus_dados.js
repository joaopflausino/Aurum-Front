import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './account.css';
import imagem from '../../shared/images/nome-aurum-investing.png';

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
           <img src={imagem} className="logo-aurum"/>
           <button className='botao-editar-foto'>Editar foto de perfil</button> 
          </div>
          <div className='texto-e-input-md'>
            <label for='senha'>Senha</label>
            <input id='senha-md' type="password" name="senha" placeholder="Senha" />
            <div className='check-md'>
              <input id="editar-dados" type="checkbox" name="editar-dados"/>
              <label for='editar'>Editar</label>
            </div>
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