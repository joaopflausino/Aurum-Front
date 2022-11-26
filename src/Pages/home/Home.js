import React from 'react';
import './home.css';
import UsuarioService from '../../app/service/usuarioService';
import { AuthContext } from '../../main/ProvedorDeAutentificacao';
import Navbar from '../../components/Navbar';
import AnyChart from 'anychart-react/dist/anychart-react.min.js';

class Home extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    user: '',
    saldo: 0,
    saldoClass: ''
  }

  json = [
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

  dados = "";

  dado = this.json.forEach((invest) => this.dados += `${invest.month}/${invest.year},${invest.value}\n`);

  // "11/21,100\n12/21,50\n1/22,34\n2/22,72\n3/22,123\n4/22,122\n5/22,153\n6/22,200\n"

  chart = {
    width: 1200,
    height: 600,
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
    }
  };


  componentDidMount() {
    const user = this.context.usuarioAutenticado;
    console.log(user);
  }

  render() {

    return (
      <>
        <Navbar />
      </>
    )
  }
}

Home.contextType = AuthContext;

export default Home;