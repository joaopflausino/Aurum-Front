import LocalStorageService from './localStorageService'

export const USUARIO_LOGADO = '_usuario_logado'

class AuthService {

  static isAuth() {
    const usuario = LocalStorageService.getItem(USUARIO_LOGADO);
    return usuario && usuario.id;
  }

  static getUserAuth() {
    return LocalStorageService.getItem(USUARIO_LOGADO);
  }

  static destroySession() {
    LocalStorageService.removeItem(USUARIO_LOGADO);
  }

  static initSession(usuario) {
    LocalStorageService.addItem(USUARIO_LOGADO, usuario);
  }
}

export default AuthService;