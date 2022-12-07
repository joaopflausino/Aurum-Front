import React from "react";
import Navbar from "../../components/Navbar";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import "./investments.css";
import UsuarioService from "../../app/service/usuarioService";
import { Form, ListGroup, ListGroupItem, Spinner, UncontrolledAlert } from "reactstrap";
import AccordionComponent from "./AccordionComponent";
import TableFixedIncome from "./TableFixedIncome";
import { AuthContext } from "../../main/ProvedorDeAutentificacao";
import TableCheckingAccount from "./TableCheckingAccount";
import Axios from "axios";
import TableStocks from "./TableStocks";

class MyInvestments extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    hist: null,
    lista: null,
  };

  _asyncRequest = null;

  componentDidMount() {
    const user = this.context.usuarioAutenticado;
    this._asyncRequest = this.apiService
      .historicoDaCarteira(user.wallet.id)
      .then((response) => {
        const historico = response.data;
        this.setState({ hist: historico });
      })
      .catch((erro) => {
        console.log(erro.response.data);
      });

    this.apiService
      .listarCarteira(user.wallet.id)
      .then((response) => {
        const lista = response.data;
        this.setState({ lista: lista });
        console.log(lista);
      })
      .catch((erro) => {
        console.log(erro.response.data);
      });
  }

  render() {
    if (this.state.hist === null || this.state.lista === null) {
      return (
        <>
          <Navbar />{" "}
          <div className="spinner">
            <Spinner></Spinner>
          </div>
        </>
      );
    }

    const tudo = "";
    const h = this.state.hist.forEach((invest) => (this.tudo += `${invest.month}/${invest.year},${invest.price}\n`));

    const stocks = this.state.lista.stock.map((response) => {
      return { name: response.stock.name, id: response.stock.id, idInvest: response.id };
    });

    const cAccounts = this.state.lista.checkingAccount.map((response) => {
      return { name: response.title, id: response.id };
    });

    const fixedIncomes = this.state.lista.fixedIncome.map((response) => {
      return { name: response.paper, id: response.issuer };
    });

    const areaDois = {
      width: 1100,
      height: 400,
      type: "area",
      data: this.tudo,
      title: "Gráfico de rentabilidade da carteira",
      yAxis: [
        1,
        {
          orientation: "right",
          enabled: true,
          labels: {
            format: "{%Value}{decimalPoint:\\,}",
          },
        },
      ],
      legend: {
        background: "lightgreen 0.4",
        padding: 0,
      },
      lineMarker: {
        value: 4.5,
      },
      background: "#b2b2b200",
      fill: "gold",
      stroke: "gray",
    };

    const data2 = [
      { x: "Ação", value: this.state.lista.totalStock },
      { x: "Renda Fixa", value: this.state.lista.totalFixedIncome },
      { x: "Conta Corrente", value: this.state.lista.totalCheckingAccount },
    ];

    const pie2 = {
      type: "pie",
      width: 600,
      height: 400,
      data: data2,
      title: "Gráfico de pizza",
      background: "#b2b2b200",
    };

    return (
      <>
        <Navbar />
        <div className="main-mi">
          <h1 className="h1-mi-mi">Meus Investimentos</h1>
          <div className="container-cima-mi">
            <div id="container-mi-mi" className="container">
              <div className="row align-items-center mb-3">
                <div className="col-8">
                  <AnyChart id="pie-chart" {...pie2} />
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
          <div className="container-baixo-mi">
            <div className="row align-items-center">
              <div className="col">
                <AnyChart id="area-chart" {...areaDois} />
              </div>

              <div>
                <AccordionComponent
                  Title={"Renda Fixa"}
                  Content1={<AnyChart id="rendafixa" {...this.torta_rendafixa} />}
                  Content2={<TableFixedIncome fixedIncome={this.state.lista.fixedIncome} />}
                  Content3={<></>}
                />
                <AccordionComponent
                  Title={"Conta Corrente"}
                  Content1={<AnyChart id="contacorrente" {...this.torta_contacorrente} />}
                  Content2={<TableCheckingAccount cAccounts={this.state.lista.checkingAccount} />}
                  Content3={
                    <div>
                      {this.state.lista.checkingAccount.map((objeto) => (
                        <Form id="formCheckingAccount" onSubmit={handleSubmitCheckingAccount}>
                          <ListGroup>
                            <ListGroupItem>
                              <input
                                name="checkingAccountInput"
                                id="checkingAccountInput"
                                readOnly
                                value={objeto.id}
                              ></input>
                              <h3 className="inputH3">
                                {objeto.title +
                                  ", rendimento mensal: " +
                                  objeto.yieldRate +
                                  ", investido em: " +
                                  objeto.initialDate}
                              </h3>
                              <button type="submit" class="btn btn-outline-danger">
                                Concluir Investimento
                              </button>
                            </ListGroupItem>
                          </ListGroup>
                        </Form>
                      ))}
                    </div>
                  }
                />
                <AccordionComponent
                  Title={"Ações"}
                  Content1={<AnyChart id="acoes" {...this.torta_acoes} />}
                  Content2={<TableStocks stocks={this.state.lista.stock} />}
                  Content3={
                    <div className="stockDiv">
                      {this.state.lista.stock.map((objeto) => (
                        <Form id="formStock" onSubmit={handleSubmit}>
                          <ListGroup>
                            <ListGroupItem>
                              <input name="stockInput" id="stockInput" readOnly value={objeto.id}></input>
                              <h3 className="inputH3">
                                {objeto.stock.name + " " + objeto.stock.id + ", investido em: " + objeto.initialDate}
                              </h3>
                              <button type="submit" class="btn btn-outline-danger">
                                Concluir Investimento
                              </button>
                            </ListGroupItem>
                          </ListGroup>
                        </Form>
                      ))}
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
MyInvestments.contextType = AuthContext;
export default MyInvestments;

const api = Axios.create({
  baseURL: "http://localhost:8080/api",
});

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  api.post("/stock/conclude/" + data.stockInput).then((response) => {
    alert("Ativo concluído com sucesso!\n Atualize a página para recarregar os dados.");
  });
};

const handleSubmitCheckingAccount = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  api.post("/checkingAccount/conclude/" + data.checkingAccountInput).then((response) => {
    alert("Ativo concluído com sucesso!\n Atualize a página para recarregar os dados.");
  });
};
