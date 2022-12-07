import React from "react";
import "./home.css";
import UsuarioService from "../../app/service/usuarioService";
import { AuthContext } from "../../main/ProvedorDeAutentificacao";
import Navbar from "../../components/Navbar";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import { Spinner } from "reactstrap";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

class Home extends React.Component {
  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    hist: null,
    stock1: null,
    stock5: null,
    stock4: null,
    stock2: null,
    news1: null,
    news2: null,
    news3: null,
  };

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
    Stock1().then((response) => {
      this.setState({ stock1: response });
    });
    Stock5().then((response) => {
      this.setState({ stock5: response });
    });
    Stock4().then((response) => {
      this.setState({ stock4: response });
    });
    Stock2().then((response) => {
      this.setState({ stock2: response });
    });
    GetNews().then((response) => {
      this.setState({ news1: response[0] });
      this.setState({ news2: response[1] });
      this.setState({ news3: response[2] });
    });
  }

  render() {
    if (this.state.hist === null || this.state.lista === null) {
      return (
        <>
          <Navbar />
          <div className="spinner">
            <Spinner></Spinner>
          </div>
        </>
      );
    }

    const tudo = "";
    const h = this.state.hist.forEach((invest) => (this.tudo += `${invest.month}/${invest.year},${invest.price}\n`));

    const area = {
      width: 1350,
      height: 300,
      type: "area",
      data: this.tudo,
      title: "Gráfico de rentabilidade da carteira",
      selectRectangleMarqueeFill: {
        color: "#00000",
        opacity: 0.4,
      },
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
      lineMarker: {
        value: 4.5,
      },
      background: "#b2b2b200",
    };

    const area2 = {
      width: 860,
      height: 290,
      type: "column",
      data: this.tudo,
      title: "Gráfico de rentabilidade da carteira",
      background: "none",
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
      lineMarker: {
        value: 4.5,
      },
    };

    return (
      <>
        <Navbar />
        <div className="main-home">
          <div className="container-cima">
            <AnyChart id="area-chart" {...area} />
          </div>
          <div className="container-meio">
            {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  PARTE DO MEIO ESQUERDA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
            <div className="container-meio-esquerda">
              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <div className="stock">
                    <div className="stock-esquerda">
                      <h3 className="stock-symbol">AAPL</h3>
                      <h3 className="stock-name">Apple</h3>
                      <div className="stock-num">{this.state.stock1}</div>
                    </div>
                    <div>
                      <img className="img-stock" src="https://br.advfn.com/common/images/company/N_AAPL.png"></img>
                    </div>
                  </div>
                  <div className="stock">
                    <div className="stock-esquerda">
                      <h3 className="stock-symbol">NFLX</h3>
                      <h3 className="stock-name">Netflix</h3>
                      <div className="stock-num">{this.state.stock5}</div>
                    </div>
                    <div>
                      <img
                        className="img-stock"
                        src="https://www.pngplay.com/wp-content/uploads/7/Netflix-Logo-PNG-HD-Quality.png"
                      ></img>
                    </div>
                  </div>
                </div>
                <div class="col-md-auto">
                  <div className="stock">
                    <div className="stock-esquerda">
                      <h3 className="stock-symbol">NVDA</h3>
                      <h3 className="stock-name">NVIDIA</h3>
                      <div className="stock-num">{this.state.stock4}</div>
                    </div>
                    <div>
                      <img
                        className="img-stock"
                        src="https://www.pngplay.com/wp-content/uploads/13/Nvidia-Transparent-File.png"
                      ></img>
                    </div>
                  </div>

                  <div className="stock">
                    <div className="stock-esquerda">
                      <h3 className="stock-symbol">TSLA</h3>
                      <h3 className="stock-name">Tesla</h3>
                      <div className="stock-num">{this.state.stock2}</div>
                    </div>
                    <div>
                      <img
                        className="img-stock"
                        src="https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  PARTE DO MEIO DIREITA ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
            <div className="container-meio-direita">
              <AnyChart id="area-chart2-home" {...area2} />
            </div>
          </div>
          {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  PARTE DO BAIXO ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
          <div className="container-baixo">
            <Carousel className="carousel-slide">
              <Carousel.Item>
                {this.state.news1}
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                {this.state.news2}
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                {this.state.news3}
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

Home.contextType = AuthContext;

export default Home;

async function Stock1() {
  let response = await fetch(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=GL7OCY3JYIA7LDPG"
  );
  let result = await response.json();
  const stock1_price = parseFloat(result["Global Quote"]["05. price"]);
  const stock1_gain = parseFloat(result["Global Quote"]["09. change"]);
  const stock1_variation = parseFloat(result["Global Quote"]["10. change percent"]).toFixed(2);
  if (stock1_gain >= 0) {
    var stock1 = (
      <>
        <div className="stock-div-price">$ {stock1_price}</div>
        <div className="gain-variation1">
          <div className="stock-div-gain">{stock1_gain}</div>
          <div>({stock1_variation}%)</div>
        </div>
      </>
    );
    return stock1;
  } else {
    var stock1 = (
      <>
        <div className="stock-div-price">$ {stock1_price}</div>
        <div className="gain-variation2">
          <div className="stock-div-gain">{stock1_gain}</div>
          <div>({stock1_variation}%)</div>
        </div>
      </>
    );
    return stock1;
  }
}

async function Stock2() {
  //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  TESLA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
  let response2 = await fetch(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSLA&apikey=GL7OCY3JYIA7LDPG"
  );
  let result2 = await response2.json();
  const stock2_price = parseFloat(result2["Global Quote"]["05. price"]);
  const stock2_gain = parseFloat(result2["Global Quote"]["09. change"]);
  const stock2_variation = parseFloat(result2["Global Quote"]["10. change percent"]).toFixed(2);
  if (stock2_gain >= 0) {
    var stock2 = (
      <>
        <div className="stock-div-price">$ {stock2_price}</div>
        <div className="gain-variation1">
          <div className="stock-div-gain">{stock2_gain}</div>
          <div>({stock2_variation}%)</div>
        </div>
      </>
    );
    return stock2;
  } else {
    var stock2 = (
      <>
        <div className="stock-div-price">$ {stock2_price}</div>
        <div className="gain-variation2">
          <div className="stock-div-gain">{stock2_gain}</div>
          <div>({stock2_variation}%)</div>
        </div>
      </>
    );
    return stock2;
  }
}

async function Stock4() {
  //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  NVIDIA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
  let response4 = await fetch(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NVDA&apikey=GL7OCY3JYIA7LDPG"
  );
  let result4 = await response4.json();
  const stock4_price = parseFloat(result4["Global Quote"]["05. price"]);
  const stock4_gain = parseFloat(result4["Global Quote"]["09. change"]);
  const stock4_variation = parseFloat(result4["Global Quote"]["10. change percent"]).toFixed(2);
  if (stock4_gain >= 0) {
    var stock4 = (
      <>
        <div className="stock-div-price">$ {stock4_price}</div>
        <div className="gain-variation1">
          <div className="stock-div-gain">{stock4_gain}</div>
          <div>({stock4_variation}%)</div>
        </div>
      </>
    );
    return stock4;
  } else {
    var stock4 = (
      <>
        <div className="stock-div-price">$ {stock4_price}</div>
        <div className="gain-variation2">
          <div className="stock-div-gain">{stock4_gain}</div>
          <div>({stock4_variation}%)</div>
        </div>
      </>
    );
    return stock4;
  }
}

async function Stock5() {
  //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  NETFLIX  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
  let response5 = await fetch(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NFLX&apikey=GL7OCY3JYIA7LDPG"
  );
  let result5 = await response5.json();
  const stock5_price = parseFloat(result5["Global Quote"]["05. price"]);
  const stock5_gain = parseFloat(result5["Global Quote"]["09. change"]);
  const stock5_variation = parseFloat(result5["Global Quote"]["10. change percent"]).toFixed(2);
  if (stock5_gain >= 0) {
    var stock5 = (
      <>
        <div className="stock-div-price">$ {stock5_price}</div>
        <div className="gain-variation1">
          <div className="stock-div-gain">{stock5_gain}</div>
          <div>({stock5_variation}%)</div>
        </div>
      </>
    );
    return stock5;
  } else {
    var stock5 = (
      <>
        <div className="stock-div-price">$ {stock5_price}</div>
        <div className="gain-variation2">
          <div className="stock-div-gain">{stock5_gain}</div>
          <div>({stock5_variation}%)</div>
        </div>
      </>
    );
    return stock5;
  }
}

async function GetNews() {
  let responseN = await fetch("https://newsapi.org/v2/everything?q=financeiro&apiKey=572353a32aed49179c9463f5eee0e609");
  let resultN = await responseN.json();

  const newsHome = resultN.articles.slice(0, 10).map((noticia) => {
    return (
      <a className="single-news-home" href={noticia.url}>
        <div className="image-home">
          <img className="img-news-home" src={noticia.urlToImage} />
        </div>
        <div className="text-home">
          <div className="news-title-home">{noticia.title}</div>
        </div>
      </a>
    );
  });

  return newsHome;
}
