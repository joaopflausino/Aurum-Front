import React, { Component } from 'react';

import AuthService from '../app/service/auth'

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = AuthContext.Provider;

class ProvedorAutenticado extends Component {

  state = {
    usuarioAutenticado: null,
    isAutenticado: false
  }

  iniciarSessao = (usuario) => {
    AuthService.initSession(usuario);
    this.setState({ isAutenticado: true, usuarioAutenticado: usuario })
  }

  encerrarSessao = () => {
    AuthService.destroySession();
    this.setState({ isAutenticado: false, usuarioAutenticado: null });
  }

  render() {

    const contexto = {
      usuarioAutenticado: this.state.usuarioAutenticado,
      isAutenticado: this.state.isAutenticado,
      iniciarSessao: this.iniciarSessao,
      encerrarSessao: this.encerrarSessao
    }

    return (
      <AuthProvider value={contexto}>
        {this.props.children}
      </AuthProvider>
    )
  }
}

export default ProvedorAutenticado;