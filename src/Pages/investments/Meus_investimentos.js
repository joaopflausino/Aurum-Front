import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import AnyChart from "anychart-react/dist/anychart-react";
import "./investments.css";
import { Table } from "reactstrap";
import TableAcoes from "./TableAcoes";
import TabelaRendafixa from "./TableRendafixa";
import AccordionComponent from "./AccordionComponent";
import TableRendafixa from "./TableRendafixa";
import GutterlessList from "./Gutterlesslist";

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
  /*constructor() {
    super();
    this.apiService = new UsuarioService();
  }*/

  investmentsPerMonth = [
    {
      month: 10,
      year: 2021,
      value: 100,
    },
    {
      month: 11,
      year: 2021,
      value: 108,
    },
    {
      month: 12,
      year: 2021,
      value: 112,
    },
    {
      month: 1,
      year: 2022,
      value: 105,
    },
    {
      month: 2,
      year: 2022,
      value: 117,
    },
    {
      month: 3,
      year: 2022,
      value: 122.5,
    },
    {
      month: 4,
      year: 2022,
      value: 135.12,
    },
    {
      month: 5,
      year: 2022,
      value: 142,
    },
    {
      month: 6,
      year: 2022,
      value: 145,
    },
    {
      month: 7,
      year: 2022,
      value: 136.78,
    },
  ];

  dados = "";

  data_geral = [
    { x: "Ação", value: 500 },
    { x: "Renda Fixa", value: 350 },
    { x: "Conta Corrente", value: 120 },
    { x: "Tesouro Direto", value: 220 },
  ];

  pie = {
    type: "pie",
    width: 600,
    height: 400,
    data: this.data_geral,
    title: "Gráfico de pizza",
    background: "#b2b2b200",
  };

  torta_acoes = {
    type: "pie",
    width: 600,
    height: 400,
    data: data_Acoes,
    title: "Gráfico de pizza",
    background: "#b2b2b200",
  };

  torta_tesouro = {
    type: "pie",
    width: 600,
    height: 400,
    data: data_Tesouro,
    title: "Gráfico de pizza",
    background: "#b2b2b200",
  };

  torta_contacorrente = {
    type: "pie",
    width: 600,
    height: 400,
    data: data_ContaCorrente,
    title: "Gráfico de pizza",
    background: "#b2b2b200",
  };

  torta_rendafixa = {
    type: "pie",
    width: 600,
    height: 400,
    data: data_RendaFixa,
    title: "Gráfico de pizza",
    background: "#b2b2b200",
  };

  area = {
    width: 600,
    height: 400,
    type: "area",
    data: this.investmentsPerMonth,
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
      padding: 0,
    },
    lineMarker: {
      value: 4.5,
    },
    background: "#b2b2b200",
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="main-mi">
          <div className="container-cima-mi">
            <div className="container">
              <div className="row align-items-center mb-3">
                <div className="col-8">
                  <AnyChart id="pie-chart" {...this.pie} />
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
          <div className="container-baixo-mi">
            <div className="row align-items-center">
              <div className="col">
                <AnyChart id="area-chart" {...this.area} />
              </div>
              <AccordionComponent
                Title={"Renda Fixa"}
                Content1={<AnyChart id="Renda Fixa" {...this.torta_rendafixa} />}
                Content2={<TableRendafixa />}
                Content3={<GutterlessList objeto={gutterlist_data_rendafixa} />}
              />

              <AccordionComponent
                Title={"conta Corrente"}
                Content1={<AnyChart id="Conta Corrente" {...this.torta_contacorrente} />}
                Content2={<TableAcoes />}
                Content3={<GutterlessList objeto={gutterlist_data_Ações} />}
              />
              <AccordionComponent
                Title={"Tesouro Direto"}
                Content1={<AnyChart id="Tesouro Direto" {...this.torta_tesouro} />}
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
