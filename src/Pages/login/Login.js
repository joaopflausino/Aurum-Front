import React from 'react';
import './login.css';
import imagem1 from '../../shared/images/Carteira.png';
import imagem2 from '../../shared/images/logo-aurum.png';
import { useEffect } from 'react';

function Login() {
  useEffect(() => {
    document.title = "Login"
 }, []);
  return (
    <>
      <div className='main-login'>
        <header className='header-login'>
          <img src={imagem2} className='logo-login' alt="logo" />  
        </header>   
        <div className='esquerda-login'>
          <div className='texto1'>
            <h1>A melhor plataforma</h1>
            <h1>para acompanhar seus investimentos...</h1>
          </div>
          <div className='baixo-esquerda'>
            <div className='texto2'>
              <h2 className='h2-subtexto'>Notícias,</h2>
              <h2 className='h2-subtexto'>Cotações,</h2>
              <h2 className='h2-subtexto'>Simulações,</h2>
              <h2 className='h2-subtexto'>Rentabilidade,</h2>
              <h2 className='h2-subtexto'>e muito mais...</h2>
            </div>
            <div className='img-carteira'>
              <img src={imagem1} className='carteira' alt="carteira" />
            </div>
          </div>
        </div>

        <div className='direita-login'>
          <div className='card-login'>
            <h1 className='h1-login'>Login</h1>
            <div className='campo-texto'>
              <input id='email' type="text" name="email" placeholder="E-mail" />
            </div>
            <div className='campo-texto'>
              <input id='senha' type="password" name="senha" placeholder="Senha" />
            </div>
            <button className='botao-esqueceu-senha'>Esqueceu a senha?</button>
            <button className='botao-login'>Entrar</button>
            <h3 className='h3-nao-tem-conta'>Não tem conta?</h3>
            <button className='botao-criar-conta'>Registrar Agora</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;