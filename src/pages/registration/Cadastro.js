import React from 'react';
import { useEffect } from 'react';
import './registration.css';
import imagem1 from '../../shared/images/logo-aurum.png';

function Cadastro() {
  useEffect(() => {
    document.title = "Aurum Investing"
 }, []);
  return (
    <>
    <header className='header-cadastro'>
        <img src={imagem1} className='logo-cadastro' alt="logo" />  
    </header> 
    <div className='main-cadastro'>
      <div className='container-cadastro'>
        <h1 className='h1-cadastro'>Cadastro</h1>
        <div className='texto-e-input-cadastro'>
          <label for='nome'>Nome</label>
          <input id='nome' type="text" name="nome" placeholder="Nome" />
        </div>
        <div className='texto-e-input-cadastro'>
          <label for='email'>Email</label>
          <input id='email' type="text" name="email" placeholder="Email" />
        </div>
        <div className='texto-e-input-cadastro'>
          <label for='senha'>Senha</label>
          <input id='senha' type="password" name="senha" placeholder="Senha" />
        </div>
        <div className='texto-e-input-cadastro'>
          <label for='confirmar-senha'>Confirmar Senha</label>
          <input id='confirmar-senha' type="password" name="confirmar-senha" placeholder="Confirmar Senha" />
        </div>
        <div className='texto-e-input-cadastro'>
          <label for='cpf'>CPF</label>
          <input id='cpf' type="text" name="cpf" placeholder="CPF" />
        </div>
        <button className='botao-cadastrar'>Cadastrar</button>
      </div>
    </div>
  </>
  );
}

export default Cadastro;