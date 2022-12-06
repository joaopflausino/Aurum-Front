import React from "react";
import "./account.css";
import { AuthContext } from "../../main/ProvedorDeAutentificacao";
import Navbar from "../../components/Navbar";
import AuthService from "../../app/service/auth";
import { Form } from "reactstrap";
import Axios from "axios";

function Account() {
  const auth = AuthService;

  const api = Axios.create({
    baseURL: "http://localhost:8080/api",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const json = {
      id: auth.getUserAuth().id,
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      wallet: {
        id: auth.getUserAuth().wallet.id,
      },
    };
    api.put("/user", json).then((response) => {
      console.log(response);
    });
  };

  const user = auth.getUserAuth();

  return (
    <>
      <Navbar />
      <div className="main-md">
        <div className="container-dados">
          {" "}
          {/* DIV RESPONSAVEL PELA CAIXA CENTRAL */}
          <h1 className="h1-meus-dados">Meus Dados</h1> {/* TITULO */}
          <Form id="modalForm" onSubmit={handleSubmit}>
            <div className="texto-e-input-md">
              {" "}
              {/* DIV RESPONSAVEL PELA LINHA 1 COMPLETA */}
              <div className="div-input">
                <label htmlFor="nome-md">Nome</label>
                <input id="name" type="text" name="name" defaultValue={user.name} />
              </div>
            </div>
            <div className="texto-e-input-md">
              {" "}
              {/* DIV RESPONSAVEL PELA LINHA 2 COMPLETA */}
              <div className="div-input">
                <label htmlFor="email-md">Email</label>
                <input id="email" type="text" name="email" defaultValue={user.email} />
              </div>
            </div>
            <div className="texto-e-input-md">
              {" "}
              {/* DIV RESPONSAVEL PELA LINHA 3 COMPLETA */}
              <div className="div-input">
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" name="password" defaultValue={user.password} />
              </div>
            </div>
            <div className="texto-e-input-md">
              {" "}
              {/* DIV RESPONSAVEL PELA LINHA 4 COMPLETA */}
              <div className="div-input">
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="text" name="cpf" defaultValue={user.cpf} />
              </div>
            </div>
            <button className="botao-salvar" type="submit">
              Salvar
            </button>{" "}
            {/* BOTAO SALVAR */}
          </Form>
        </div>
      </div>
    </>
  );
}

Account.contextType = AuthContext;

export default Account;
