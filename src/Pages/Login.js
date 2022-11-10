import React from 'react';
import './login.css';


function Login() {
  return (
    <div className='main-login'>
      <div className='esquerda-login'>
        <h1>A melhor plataforma  </h1>
        <h1>para acompanhar seus investimentos...</h1>
        


      </div>


      <div className='direita-login'>
        <div className='card-login'>
          <h1>LOGIN</h1>
          <div className='campo-texto'>
            <label for="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário"/>
          </div>
          <div className='campo-texto'>
            <label for="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha"/> 
          </div>
          <button className='botao-login'>Login</button>
        </div>


      </div>

    </div>
  );
}

export default Login;