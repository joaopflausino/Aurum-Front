import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import AnyChart from 'anychart-react/dist/anychart-react.min.js';

import './investments.css';
import UsuarioService from '../../app/service/usuarioService';
import { FaBlackTie } from 'react-icons/fa';
import { Table } from 'reactstrap';

class MyInvestments extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  investmentsPerMonth = [
    {
      month: 10,
      year: 2021,
      value: 100
    },
    {
      month: 11,
      year: 2021,
      value: 108
    },
    {
      month: 12,
      year: 2021,
      value: 112
    },
    {
      month: 1,
      year: 2022,
      value: 105
    },
    {
      month: 2,
      year: 2022,
      value: 117
    },
    {
      month: 3,
      year: 2022,
      value: 122.5
    },
    {
      month: 4,
      year: 2022,
      value: 135.12
    },
    {
      month: 5,
      year: 2022,
      value: 142
    },
    {
      month: 6,
      year: 2022,
      value: 145
    },
    {
      month: 7,
      year: 2022,
      value: 136.78
    }
  ];

  totalValuePerInvestment = {
    stock: {
      value: 50
    },
    checkingAccount: {
      value: 50
    },
    treasuryDirect: {
      value: 50
    },
    fixedRate: {
      value: 50
    }
  }

  dados = "";

  dado = this.investmentsPerMonth.forEach((invest) => this.dados += `${invest.month}/${invest.year},${invest.value}\n`);

  pizza = "";

  // pizzaData = this.totalValuePerInvestment.forEach((investment) => this.pizza += `${}`)

  // "11/21,100\n12/21,50\n1/22,34\n2/22,72\n3/22,123\n4/22,122\n5/22,153\n6/22,200\n"

  data = [
    { x: "Ação", value: 500 },
    { x: "Renda Fixa", value: 350 },
    { x: "Conta Corrente", value: 120 },
    { x: "Tesouro Direto", value: 220 }
  ];

  pie = {
    type: 'pie',
    width: 600,
    height: 400,
    data: this.data,
    title: 'Gráfico de pizza',
    background: "#b2b2b200"
  };

  area = {
    width: 600,
    height: 400,
    type: 'area',
    data: this.dados,
    title: 'Gráfico de rentabilidade da carteira',
    yAxis: [1, {
      orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}'
      }
    }],
    legend: {
      background: 'lightgreen 0.4',
      padding: 0
    },
    lineMarker: {
      value: 4.5
    },
    background: "#b2b2b200"
  };


  render() {
    return (
      <>
        <Navbar />
        <div className='main-mi'>
          <div className='container'>
            <div className='row align-items-center mb-3'>
              <div className='col-8'><AnyChart id='pie-chart' {...this.pie} /></div>
              <div className='col-4'>
                <Table dark>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Tipo de Investimento</th>
                      <th>Nome/Título</th>
                      <th>Valor</th>
                      <th>Valorização</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Ação</td>
                      <td>AAPL</td>
                      <td>99</td>
                      <td>12.5%</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Tesouro Direto</td>
                      <td>Banco do Brasil</td>
                      <td>350</td>
                      <td>6.9%</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Renda Fixa</td>
                      <td>Bradesco</td>
                      <td>230</td>
                      <td>2.57%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col'><AnyChart id='area-chart' {...this.area} /></div>
            </div>
          </div>
          {/* <div className='container-baixo-mi'></div> */}
        </div>
      </>)
  }
}

export default MyInvestments;