import React, { Suspense } from "react";
import Navbar from "../../components/Navbar";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import "./investments.css";
import UsuarioService from "../../app/service/usuarioService";
import { Spinner } from "reactstrap";
import TableAcoes from "./TableAcoes";
import AccordionComponent from "./AccordionComponent";
import TableRendafixa from "./TableRendaFixa";
import GutterlessList from "./GutterlessList";

const bla = {
  totalStock: 248.81,
  stock: [
    {
      id: 34,
      stock: {
        id: "AAPL",
        name: "Apple Inc.",
      },
      broker: {
        id: 2,
        name: "XP Investimentos",
      },
      quantity: 10.0,
      initialValue: 10.0,
      initialDate: "2022-01-02 00:00:00",
      price: 179.26,
    },
    {
      id: 35,
      stock: {
        id: "ABNB",
        name: "Airbnb, Inc.",
      },
      broker: {
        id: 2,
        name: "XP Investimentos",
      },
      quantity: 10.0,
      initialValue: 10.0,
      initialDate: "2022-06-02 00:00:00",
      price: 121.26,
    },
  ],
  totalCheckingAccount: 0.0,
  checkingAccount: [],
  totalFixedIncome: 1100.0,
  fixedIncome: [
    {
      id: 11,
      paper: "LCA",
      issuer: "Bradesco",
      yieldRate: 1.1,
      initialDate: "2021-12-15 00:00:00",
      finalDate: "2022-12-15 00:00:00",
      initialValue: 1000.0,
      broker: {
        id: 1,
        name: "Binance",
      },
    },
  ],
};

const data_Acoes = bla.stock.map((objeto) => {
  return { x: objeto.stock.name, value: objeto.quantity * objeto.price };
});

const data_ContaCorrente = bla.stock.map((objeto) => {
  return { x: objeto.stock.name, value: objeto.quantity * objeto.price };
});

const data_Tesouro = bla.stock.map((objeto) => {
  return { x: objeto.stock.name, value: objeto.quantity * objeto.price };
});

const data_RendaFixa = bla.fixedIncome.map((objeto) => {
  var startTime = new Date(objeto.initialDate);
  var endTime = new Date(objeto.finalDate);

  var difference = endTime.getTime() - startTime.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  console.log(TotalDays);

  return { x: objeto.paper + " " + objeto.issuer, value: TotalDays * objeto.initialValue };
});

const gutterlist_data_Ações = bla.stock.map((blason) => {
  return { name: blason.stock.name, id: blason.stock.id };
});

const gutterlist_data_rendafixa = bla.fixedIncome.map((blason) => {
  return { name: blason.paper + " " + blason.issuer, id: blason.id };
});

console.log(data_Acoes);

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
    this._asyncRequest = this.apiService
      .historicoDaCarteira(7)
      .then((response) => {
        const historico = response.data;
        this.setState({ hist: historico });
      })
      .catch((erro) => {
        console.log(erro.response.data);
      });

    this.apiService
      .listarCarteira(7)
      .then((response) => {
        const lista = response.data;
        this.setState({ lista: lista });
        console.log(lista);
        console.log(this.state);
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
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-8">
                <AnyChart id="pie-chart" {...pie2} />
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="container-baixo-mi">
            <div className="row align-items-center">
              <div className="col">
                <AnyChart id="area-chart" {...areaDois} />
              </div>
            </div>
            <div>
              <AccordionComponent
                Title={"Renda Fixa"}
                Content1={<AnyChart id="Renda Fixa" {...this.torta_rendafixa} />}
                Content2={<TableRendafixa />}
                Content3={<GutterlessList objeto={gutterlist_data_rendafixa} />}
              />
              <AccordionComponent
                Title={"Conta Corrente"}
                Content1={<AnyChart id="Conta Corrente" {...this.torta_contacorrente} />}
                Content2={<TableAcoes />}
                Content3={<GutterlessList objeto={gutterlist_data_Ações} />}
              />
              <AccordionComponent
                Title={"Ações"}
                Content1={<AnyChart id="Ações" {...this.torta_acoes} />}
                Content2={<TableAcoes />}
                Content3={<GutterlessList objeto={gutterlist_data_Ações} />}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyInvestments;
