import React from 'react';
import { useEffect } from 'react';
import './registration.css';
import imagem1 from '../../shared/images/logo-aurum.png';
import UsuarioService from '../../app/service/usuarioService';
import { showErrorMessage, showSuccessMessage } from '../../components/toastr';
import { withRouter } from 'react-router-dom';

class Registration extends React.Component {

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  state = {
    name: '',
    email: '',
    password: '',
    cpf: '',
    showConfirmDialog: true
  }

  cadastrar = () => {
    const { name, email, password, cpf } = this.state;
    const usuario = { name, email, password, cpf };

    try {
      this.service.validar(usuario);
    } catch (err) {
      const erros = err.mensagens;
      erros.forEach(msg => showErrorMessage(msg));
      return
    }

    this.service
      .cadastrarUsuario(usuario).then((response) => {
        showSuccessMessage("Usuário cadastrado com sucesso! Faça o login para acessar o sistema.")
        this.props.history.push('/login')
      }).catch(err => {
        showErrorMessage(err.response.data)
      });
  }

  login = () => {
    this.props.history.push('/login')
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter')
      this.cadastrar();
  }

  render() {
    return (
      <>
        <header className='header-cadastro'>
          <img src={imagem1} className='logo-cadastro' alt="logo" />
        </header>
        <div className='main-cadastro'>
          <div className='container-cadastro'>
            <h1 className='h1-cadastro'>Cadastro</h1>
            <div className='texto-e-input-cadastro'>
              <label for='name'>Nome</label>
              <input id='name' type="text" name="name" placeholder="Nome" onChange={this.handleChange} />
            </div>
            <div className='texto-e-input-cadastro'>
              <label for='email'>Email</label>
              <input id='email' type="text" name="email" placeholder="Email" onChange={this.handleChange} />
            </div>
            <div className='texto-e-input-cadastro'>
              <label for='password'>Senha</label>
              <input id='password' type="password" name="password" placeholder="Senha" onChange={this.handleChange} />
            </div>
            <div className='texto-e-input-cadastro'>
              <label for='cpf'>CPF</label>
              <input id='cpf' type="text" name="cpf" placeholder="CPF" />
            </div>
            <button className='botao-cadastrar' onClick={this.cadastrar}>Cadastrar</button>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Registration)