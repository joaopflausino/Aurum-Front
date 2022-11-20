import React from 'react';
import { Button } from 'primereact/button';
import currencyFormatter from 'currency-formatter';
import './home.css';
import UsuarioService from '../../app/service/usuarioService';
import { AuthContext } from '../../main/ProvedorDeAutentificacao';
import Navbar from '../../components/Navbar';

class Home extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    user: '',
    saldo: 0,
    saldoClass: ''
  }

  componentDidMount() {
    const user = this.context.usuarioAutenticado;
    console.log(user);
  }

  render() {

    return (
      <>
        <Navbar />
      </>
    )
  }
}

Home.contextType = AuthContext;

export default Home;