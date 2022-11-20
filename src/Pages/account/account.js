import React from 'react';
import { useEffect } from 'react';
import './account.css';
import imagem from '../../shared/images/nome-aurum-investing.png';
import { AuthContext } from '../../main/ProvedorDeAutentificacao';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import AuthService from '../../app/service/auth';

class Account extends React.Component {

  render() {

    const user = AuthService.getUserAuth();
    console.log(user);

    return (
      <>
        <Navbar />
        <div className='main-md'>

          <div className='container-dados'> {/* DIV RESPONSAVEL PELA CAIXA CENTRAL */}

            <h1 className='h1-meus-dados'>Meus Dados</h1>  {/* TITULO */}

            <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 1 COMPLETA */}
              <label htmlFor='nome'>Nome</label>
              <input id='nome-md' type="text" name="nome" defaultValue={user.name} />
              <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
                <label className="toggler-wrapper style-27">
                  <input type="checkbox" />
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                </label>
                <label htmlFor='editar'>Editar</label>
              </div>
            </div>

            <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 2 COMPLETA */}
              <label htmlFor='senha'>Email</label>
              <input id='email-md' type="text" name="email" defaultValue={user.email} />
              <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
                <label className="toggler-wrapper style-27">
                  <input type="checkbox" />
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                </label>
                <label htmlFor='editar'>Editar</label>
              </div>
            </div>

            <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 3 COMPLETA */}
              <label htmlFor='senha'>Senha</label>
              <input id='senha-md' type="password" name="senha" defaultValue={user.password} />
              <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
                <label className="toggler-wrapper style-27">
                  <input type="checkbox" />
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                </label>
                <label htmlFor='editar'>Editar</label>
              </div>
            </div>

            <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 4 COMPLETA */}
              <label htmlFor='cpf'>CPF</label>
              <input id='cpf-md' type="text" name="senha" defaultValue={user.cpf} />
              <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
                <label className="toggler-wrapper style-27">
                  <input type="checkbox" />
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                </label>
                <label htmlFor='editar'>Editar</label>
              </div>
            </div>

            <button className='botao-salvar'>Salvar</button> {/* BOTAO SALVAR */}

          </div>

        </div>
      </>
    );
  }
}

Account.contextType = AuthContext;

export default Account;