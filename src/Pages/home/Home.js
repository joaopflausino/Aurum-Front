import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import AnyChart from "anychart-react/dist/anychart-react";

function Home() {
  const investmentsPerMonth = [
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

  const totalValuePerInvestment = {
    stock: {
      value: 50,
    },
    checkingAccount: {
      value: 50,
    },
    treasuryDirect: {
      value: 50,
    },
    fixedRate: {
      value: 50,
    },
  };

  let dados = "";

  const dado = investmentsPerMonth.forEach((invest) => (dados += `${invest.month}/${invest.year},${invest.value}\n`));

  console.log(dados);

  const area = {
    width: 600,
    height: 400,
    type: "area",
    data: dados,
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

  //RECEBE AS AÇÕES
  let [stock1, setStock1] = useState("");
  let [stock2, setStock2] = useState("");
  let [stock4, setStock4] = useState("");
  let [stock5, setStock5] = useState("");
  let [newsHome, setNewsHome] = useState("");

  ///⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  API POR AÇÃO  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
  async function APIGET() {
    //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  APPLE  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
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
    }
    setStock1(stock1);

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
    }
    setStock2(stock2);

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
    }
    setStock4(stock4);

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
    }
    setStock5(stock5);
  }

  //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  NOTICIA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩

  async function APIGETNEWS() {
    let responseN = await fetch(
      "https://newsapi.org/v2/everything?q=mercado-financeiro&sortBy=popularity&apiKey=572353a32aed49179c9463f5eee0e609"
    );
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

    setNewsHome(newsHome);
  }

  useEffect(() => {
    APIGETNEWS();
  }, []);

  useEffect(() => {
    APIGET();
  }, []);

  useEffect(() => {
    document.title = "Aurum Investing";
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-home">
        {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  PARTE DE CIMA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
        <div className="container-cima">
          <AnyChart id="area-chart-home" {...area} />
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
                    <div className="stock-num">{stock1}</div>
                  </div>
                  <div>
                    <img className="img-stock" src="https://br.advfn.com/common/images/company/N_AAPL.png"></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">NFLX</h3>
                    <h3 className="stock-name">Netflix</h3>
                    <div className="stock-num">{stock5}</div>
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
                    <div className="stock-num">{stock4}</div>
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
                    <div className="stock-num">{stock2}</div>
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
          <div className="container-meio-direita"></div>
        </div>
        {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  PARTE DO BAIXO ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
        <div className="container-baixo">
          <Carousel className="carousel-slide">
            <Carousel.Item>
              {newsHome[1]}
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {newsHome[2]}
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {newsHome[3]}
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
