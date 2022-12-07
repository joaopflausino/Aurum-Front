import React from "react";
import { withRouter } from "react-router-dom";
import "./login.css";
import imagem1 from "../../shared/images/Carteira.png";
import imagem2 from "../../shared/images/logo-aurum.png";
import UsuarioService from "../../app/service/usuarioService";
import { showErrorMessage } from "../../components/toastr";
import { AuthContext } from "../../main/ProvedorDeAutentificacao";

class Login extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    email: "",
    password: "",
    loading: false,
  };

  entrar = () => {
    if (!this.state.email || !this.state.password) {
      showErrorMessage("Preencha todos os campos");
      return false;
    }

    this.setState({ loading: true });
    this.apiService
      .autenticar({
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        const user = response.data;
        this.context.iniciarSessao(user);
        this.props.history.push("/home");
      })
      .catch((erro) => {
        this.setState({ loading: false });
        showErrorMessage(erro.response.data);
      });
  };

  registration = () => {
    this.props.history.push("/cadastro-usuarios");
  };

  handleEnter = (e) => {
    if (e.key === "Enter") this.entrar();
  };

  render() {
    return (
      <div className="main-login">
        <header className="header-login">
          <img src={imagem2} className="logo-login" alt="logo" />
        </header>
        <div className="esquerda-login">
          <div className="texto1-login">
            <h1 className="h1-texto-login">A melhor plataforma</h1>
            <h1 className="h1-texto-login">para acompanhar seus investimentos...</h1>
          </div>
          <div className="baixo-esquerda-login">
            <div className="texto2-login">
              <h2 className="h2-subtexto-login">Notícias,</h2>
              <h2 className="h2-subtexto-login">Cotações,</h2>
              <h2 className="h2-subtexto-login">Simulações,</h2>
              <h2 className="h2-subtexto-login">Rentabilidade,</h2>
              <h2 className="h2-subtexto-login">e muito mais...</h2>
            </div>
            <div className="img-carteira">
              <img src={imagem1} className="carteira" alt="carteira" />
            </div>
          </div>
        </div>

        <div className="direita-login">
          <div className="card-login">
            <h1 className="h1-login">Login</h1>
            <div className="campo-texto-login">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="E-mail"
                value={this.setState.email}
                onChange={(event) => this.setState({ email: event.target.value })}
              />
            </div>
            <div className="campo-texto-login">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                onKeyPress={this.handleEnter}
                onChange={(event) => this.setState({ password: event.target.value })}
              />
            </div>
            <button className="botao-esqueceu-senha">Esqueceu a senha?</button>
            <button className="botao-login" onClick={this.entrar}>
              Entrar
            </button>
            <h3 className="h3-nao-tem-conta">Não tem conta?</h3>
            <a className="botao-criar-conta" onClick={this.registration}>
              Registrar Agora
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = AuthContext;

export default withRouter(Login);
