import React from 'react';
import './login.css';
import imagem from './Imagens/Carteira.png';


function Login() {
  return (
    <div className='main-login'>
      <div className='esquerda-login'>
        <div className='texto1'>
          <h1>A melhor plataforma</h1>
          <h1>para acompanhar seus investimentos...</h1>
        </div>
        <div className='texto2'>
          <h2>Notícias,</h2>
          <h2>Cotações,</h2>
          <h2>Simulações,</h2>
          <h2>e muito mais!</h2>
        </div>
        <div className='img-carteira'>
          <img src={imagem} alt="carteira" />
        </div>
      </div>


      <div className='direita-login'>
        <div className='card-login'>
          <h1>Login</h1>
          <div className='campo-texto'>
            
            <input type="text" name="email" placeholder="E-mail"/>
          </div>
          <div className='campo-texto'>
            <input type="password" name="senha" placeholder="Senha"/> 
          </div>
          <button className='botao-login'>Entrar</button>
        </div>


      </div>

    </div>
  );
}

export default Login;