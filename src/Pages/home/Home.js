import React from "react";
import "./home.css";
import UsuarioService from "../../app/service/usuarioService";
import { AuthContext } from "../../main/ProvedorDeAutentificacao";
import Navbar from "../../components/Navbar";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import { Spinner } from "reactstrap";

class Home extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    hist: null,
  };

  componentDidMount() {
    const user = this.context.usuarioAutenticado;
    console.log(user);
    this._asyncRequest = this.apiService
      .historicoDaCarteira(user.wallet.id)
      .then((response) => {
        const historico = response.data;
        this.setState({ hist: historico });
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

    return (
      <>
        <Navbar />
        <div className="main-home">
          <div className="container-cima">
            <AnyChart id="area-chart" {...areaDois} />
          </div>
          <div className="container-meio">
            <div className="container-meio-esquerda"></div>
            <div className="container-meio-direita"></div>
          </div>
          <div className="container-baixo"></div>
        </div>
      </>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
