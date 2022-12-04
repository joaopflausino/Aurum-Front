import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "./stocks.css";
import imagem_nasdak from "../../shared/images/nasdaq-logo.png";

function PA() {
  //RECEBE AS AÇÕES
  let [stock1, setStock1] = useState("");
  let [stock2, setStock2] = useState("");
  let [stock3, setStock3] = useState("");
  let [stock4, setStock4] = useState("");
  let [stock5, setStock5] = useState("");

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

    //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  PEPSI  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
    let response3 = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=PEP&apikey=GL7OCY3JYIA7LDPG"
    );
    let result3 = await response3.json();
    const stock3_price = parseFloat(result3["Global Quote"]["05. price"]);
    const stock3_gain = parseFloat(result3["Global Quote"]["09. change"]);
    const stock3_variation = parseFloat(result3["Global Quote"]["10. change percent"]).toFixed(2);
    if (stock3_gain >= 0) {
      var stock3 = (
        <>
          <div className="stock-div-price">$ {stock3_price}</div>
          <div className="gain-variation1">
            <div className="stock-div-gain">{stock3_gain}</div>
            <div>({stock3_variation}%)</div>
          </div>
        </>
      );
    } else {
      var stock3 = (
        <>
          <div className="stock-div-price">$ {stock3_price}</div>
          <div className="gain-variation2">
            <div className="stock-div-gain">{stock3_gain}</div>
            <div>({stock3_variation}%)</div>
          </div>
        </>
      );
    }
    setStock3(stock3);

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

  useEffect(() => {
    APIGET();
  }, []);

  useEffect(() => {
    document.title = "Aurum Investing";
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-pa">
        {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ CIMA ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
        <div className="container-cima-pa">
          <div className="indice-preco">
            <img src={imagem_nasdak} className="nasdaq-logo" />
            <h3 className="indice-nasdaq"> 11.994,26</h3>
            <h3 className="variation-nasdaq">−47,63 (0,40%)</h3>
          </div>
          <h3 className="sub-titulo-nasdaq">National Association of Securities Dealers Automated Quotations</h3>
          <h3 className="texto-nasdaq">
            A segunda maior bolsa de valores dos Estados Unidos na qual se encontram grandes empresas de tecnologia como
            eletrônica, informática, biotecnologia e telecomunicações.
          </h3>
        </div>

        {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ BAIXO ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
        <div className="container-baixo-pa">
          <div class="container text-center">
            <div class="row justify-content-md-center">
              <div class="col-md-auto">
                {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 1 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
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
                    <h3 className="stock-symbol">SBUX</h3>
                    <h3 className="stock-name">Starbucks</h3>
                    <div className="stock-num">{stock2}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Logo-PNG-Clipart-Background.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">ABNB</h3>
                    <h3 className="stock-name">Airbnb</h3>
                    <div className="stock-num">{stock4}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-1-1-1386x1536.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">ADSK</h3>
                    <h3 className="stock-name">Autodesk</h3>
                    <div className="stock-num">{stock5}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.freepnglogos.com/uploads/logo-3d-png/autodesk-logo-3d-logo-brands-6.png"
                    ></img>
                  </div>
                </div>
              </div>
              <div class="col-md-auto">
                {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 2 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
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
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">MSFT</h3>
                    <h3 className="stock-name">Microsoft</h3>
                    <div className="stock-num">{stock2}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/3/Windows-Microsoft-Logo-Transparent-Image.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">BKNG</h3>
                    <h3 className="stock-name">Booking</h3>
                    <div className="stock-num">{stock2}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://cf.bstatic.com/static/img/booking_logo_knowledge_graph/247454a990efac1952e44dddbf30c58677aa0fd8.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">EBAY</h3>
                    <h3 className="stock-name">eBay Inc</h3>
                    <div className="stock-num">{stock1}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/2/EBay-PNG-HD-Quality.png"
                    ></img>
                  </div>
                </div>
              </div>
              <div class="col-md-auto">
                {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 3 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">PEP</h3>
                    <h3 className="stock-name">PepsiCo</h3>
                    <div className="stock-num">{stock3}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">MRVL</h3>
                    <h3 className="stock-name">Marvell</h3>
                    <div className="stock-num">{stock5}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.freepnglogos.com/uploads/marvel-logo-png/marvel-logo-hd-5.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">PYPL</h3>
                    <h3 className="stock-name">PayPal</h3>
                    <div className="stock-num">{stock4}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/8/Paypal-Logo-Background-PNG-Image.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">CSCO</h3>
                    <h3 className="stock-name">Cisco</h3>
                    <div className="stock-num">{stock3}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.freepnglogos.com/uploads/cisco-png-logo/new-cisco-logo-png-1.png"
                    ></img>
                  </div>
                </div>
              </div>
              <div class="col-md-auto">
                {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 4 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
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
                    <h3 className="stock-symbol">INTC</h3>
                    <h3 className="stock-name">Intel</h3>
                    <div className="stock-num">{stock2}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.pngplay.com/wp-content/uploads/3/Intel-Logo-Transparent-Image.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">META</h3>
                    <h3 className="stock-name">Meta Inc</h3>
                    <div className="stock-num">{stock1}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta-500x281.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">ZS</h3>
                    <h3 className="stock-name">Zscaler</h3>
                    <div className="stock-num">{stock5}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://logosandtypes.com/wp-content/uploads/2022/04/zscaler.svg"
                    ></img>
                  </div>
                </div>
              </div>
              <div class="col-md-auto">
                {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 5 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
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
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">AMD</h3>
                    <h3 className="stock-name">AMD Inc</h3>
                    <div className="stock-num">{stock3}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://logosmarcas.net/wp-content/uploads/2020/04/AMD-Simbolo-650x366.jpg"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">MELI</h3>
                    <h3 className="stock-name">MercLibre</h3>
                    <div className="stock-num">{stock4}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png"
                    ></img>
                  </div>
                </div>
                <div className="stock">
                  <div className="stock-esquerda">
                    <h3 className="stock-symbol">ZM</h3>
                    <h3 className="stock-name">ZoomVideo</h3>
                    <div className="stock-num">{stock4}</div>
                  </div>
                  <div>
                    <img
                      className="img-stock"
                      src="https://www.freepnglogos.com/uploads/zoom-logo-png/zoom-meeting-logo-video-icon-25.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PA;
