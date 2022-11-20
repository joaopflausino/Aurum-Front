import Api from '../api'

import ErrosValidacaoException from './errosValidacao'

class UsuarioService extends Api {
  constructor() {
    super('/api/user')
  }

  autenticar(credenciais) {
    return this.post('/authenticate', credenciais)
  }

  obterSaldoUsuario(id) {
    return this.get(`/${id}/saldo`)
  }

  cadastrarUsuario(usuario) {
    return this.post('/', usuario);
  }

  validar(usuario) {
    const erros = [];

    if (!usuario.name)
      erros.push('O campo Nome é obrigatório.');

    if (!usuario.email)
      erros.push('O Campo Email é obrigatório.');

    else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/))
      erros.push('Informe um Email válido.');

    if (!usuario.password)
      erros.push('Digite a Senha');

    if (erros && erros.length > 0)
      throw new ErrosValidacaoException(erros);
  }

}

export default UsuarioService