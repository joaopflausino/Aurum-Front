import Api from "../api";

import ErrosValidacaoException from "./errosValidacao";

class UsuarioService extends Api {
  constructor() {
    super("/api");
  }

  autenticar(credenciais) {
    return this.post("/user/authenticate", credenciais);
  }

  cadastrarUsuario(usuario) {
    return this.post("/user", usuario);
  }

  historicoDaCarteira(idCarteira) {
    return this.get("/investment/history/" + idCarteira);
  }

  listarCarteira(idCarteira) {
    return this.get("/investment/" + idCarteira);
  }

  concluirInvestimentoAcao(idInvest) {
    return this.get("/stock/conclude/" + idInvest);
  }

  concluirInvestimentoContaCorrente(idInvest) {
    return this.get("/checkingAccount/conclude/" + idInvest);
  }

  atualizarUsuario(usuario) {
    return this.put("/user/", usuario);
  }

  validar(usuario) {
    const erros = [];
    if (!usuario.name) erros.push("O campo Nome é obrigatório.");
    if (!usuario.email) erros.push("O Campo Email é obrigatório.");
    else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) erros.push("Informe um Email válido.");
    if (!usuario.password) erros.push("Digite a Senha");
    if (erros && erros.length > 0) throw new ErrosValidacaoException(erros);
  }
}

export default UsuarioService;
