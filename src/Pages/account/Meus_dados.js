import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './account.css';
import imagem from '../../shared/images/nome-aurum-investing.png';

function MD() {
  useEffect(() => {
    document.title = "Meus dados"
 }, []);
  return (
    <>
    <Navbar/>
      <div className='main-md'>

        <div className='container-dados'> {/* DIV RESPONSAVEL PELA CAIXA CENTRAL */}

          <h1 className='h1-meus-dados'>Meus Dados</h1>  {/* TITULO */}

          <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 1 COMPLETA */}
            <label for='nome'>Nome</label>
            <input id='nome-md' type="text" name="nome" placeholder="Nome" />
            <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
              <label className="toggler-wrapper style-27">
                <input type="checkbox" />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label> 
              <label for='editar'>Editar</label>
            </div>
          </div>

          <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 2 COMPLETA */}
            <label for='senha'>Email</label>
            <input id='email-md' type="text" name="email" placeholder="Email" />
            <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
              <label className="toggler-wrapper style-27">
                <input type="checkbox" />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label> 
              <label for='editar'>Editar</label>
            </div>
          </div>

          <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 3 COMPLETA */}
            <label for='senha'>Senha</label>
            <input id='senha-md' type="password" name="senha" placeholder="Senha" />
            <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
              <label className="toggler-wrapper style-27">
                <input type="checkbox" />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label> 
              <label for='editar'>Editar</label>
            </div>
          </div>

          <div className='texto-e-input-md'> {/* DIV RESPONSAVEL PELA LINHA 4 COMPLETA */}
           <label for='senha'>CPF</label>
            <input id='cpf-md' type="text" name="senha" placeholder="CPF" />
            <div className='check-md'> {/* DIV RESPONSAVEL PELO CHECKBOX */}
              <label className="toggler-wrapper style-27">
                <input type="checkbox" />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label> 
              <label for='editar'>Editar</label>
            </div>
          </div>

          <button className='botao-salvar'>Salvar</button> {/* BOTAO SALVAR */}
        
        </div>

      </div>
    </>
  );
}

export default MD;