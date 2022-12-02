import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import './stocks.css';
import imagem_nasdak from '../../shared/images/nasdaq-logo.png';


function PA() {



// ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  DATA DE ONTEM  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
  let dataO = new Date();
  let diaO = "";

  dataO.setDate(dataO.getDate() - 1);
  if (dataO.getDate() <= 9){
    diaO = "0" + dataO.getDate()
  }
  else{
    diaO =  dataO.getDate()
  }
  let dataOntem = (dataO.getFullYear()) + "-" + ((dataO.getMonth() + 1)) + "-" + (diaO); 
  


  // ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  DATA DE HOJE ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
  let dataH = new Date();
  let diaH = "";

  dataH.setDate(dataH.getDate());
  if (dataH.getDate() <= 9){
    diaH = "0" + dataH.getDate()
  }
  else{
    diaH =  dataH.getDate()
  }
  let dataHoje = (dataH.getFullYear()) + "-" + ((dataH.getMonth() + 1)) + "-" + (diaH); 
  
  
  //RECEBE AS AÇÕES
  let [stock1, setStock1] = useState("");
  let [stock2, setStock2] = useState("");
  let [stock3, setStock3] = useState("");
  let [stock4, setStock4] = useState("");
  let [stock5, setStock5] = useState("");
  let [stock6, setStock6] = useState("");
  let [stock7, setStock7] = useState("");
  let [stock8, setStock8] = useState("");
  let [stock9, setStock9] = useState("");
  let [stock10, setStock10] = useState("");
  let [stock11, setStock11] = useState("");
  let [stock12, setStock12] = useState("");
  let [stock13, setStock13] = useState("");
  let [stock14, setStock14] = useState("");
  let [stock15, setStock15] = useState("");
  let [stock16, setStock16] = useState("");
  let [stock17, setStock17] = useState("");
  let [stock18, setStock18] = useState("");
  let [stock19, setStock19] = useState("");
  let [stock20, setStock20] = useState("");
  
  

  ///⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  API POR AÇÃO  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩

    async function APIGET() {
      //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  APPLE  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
      let response = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=GL7OCY3JYIA7LDPG");
      let result = await response.json();
      const stock1_price = parseFloat(result["Global Quote"]["05. price"]);
      const stock1_gain = parseFloat(result["Global Quote"]["09. change"]);
      const stock1_variation = parseFloat(result["Global Quote"]["10. change percent"]).toFixed(2);
      if(stock1_gain >= 0) {var stock1 = <><div className='stock-div-price'>$ {stock1_price}</div><div className='gain-variation1'><div className='stock-div-gain'>{stock1_gain}</div><div>({stock1_variation}%)</div></div></>}
      else{var stock1 = <><div className='stock-div-price'>$ {stock1_price}</div><div className='gain-variation2'><div className='stock-div-gain'>{stock1_gain}</div><div>({stock1_variation}%)</div></div></>}
      setStock1(stock1);


      //⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩  TESLA  ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
      let response2 = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSLA&apikey=GL7OCY3JYIA7LDPG");
      let result2 = await response2.json();
      const stock2_price = parseFloat(result2["Global Quote"]["05. price"]);
      const stock2_gain = parseFloat(result2["Global Quote"]["09. change"]);
      const stock2_variation = parseFloat(result2["Global Quote"]["10. change percent"]).toFixed(2);
      if(stock2_gain >= 0) {var stock2 = <><div className='stock-div-price'>$ {stock2_price}</div><div className='gain-variation1'><div className='stock-div-gain'>{stock2_gain}</div><div>({stock2_variation}%)</div></div></>}
      else{var stock2 = <><div className='stock-div-price'>$ {stock2_price}</div><div className='gain-variation2'><div className='stock-div-gain'>{stock2_gain}</div><div>({stock2_variation}%)</div></div></>}
      setStock2(stock2);
    }





  useEffect(() => {
    APIGET();
  }, [])

  useEffect(() => {
    document.title = "Aurum Investing"
 }, []);

  return (
    <>
      <Navbar />
      <div className='main-pa'>
        {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ CIMA ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
        <div className='container-cima-pa'>
          <h1 className='titulo-nasdaq'>Índice Nasdaq</h1>
          <img src={imagem_nasdak} className="nasdaq-logo"/>
          <h3 className='sub-titulo-nasdaq'>National Association of Securities Dealers Automated Quotations</h3>
          <h3 className='texto-nasdaq'>A segunda maior bolsa de valores dos Estados Unidos na qual se  encontram 
          grandes empresas de tecnologia como eletrônica, informática,  biotecnologia e telecomunicações.</h3>
        </div>

        {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ BAIXO ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
        <div className='container-baixo-pa'>
          <div class="container text-center">
            <div class="row justify-content-md-center">
            <div class="col-md-auto">
              {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 1 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
              <div className='stock'>
                <div className='stock-esquerda'>
                  <h3 className='stock-symbol'>AAPL</h3>
                  <h3 className='stock-name'>Apple Inc</h3>
                  <div className='stock-num'>{stock1}</div>
                </div>
                <div>
                  <img className='img-stock' src="https://br.advfn.com/common/images/company/N_AAPL.png"></img>
                </div> 
              </div>
              <div className='stock'>
                <div className='stock-esquerda'>
                  <h3 className='stock-symbol'>TSLA</h3>
                  <h3 className='stock-name'>Tesla Inc</h3>
                  <div className='stock-num'>{stock2}</div>
                </div>
                <div>
                  <img className='img-stock' src="https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png"></img>
                </div> 
              </div>
              <div className='stock'></div>
              <div className='stock'></div>
            </div>
            <div class="col-md-auto">
              {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 2 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
            </div>
            <div class="col-md-auto">
              {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 3 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
            </div>
            <div class="col-md-auto">
              {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 4 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
            </div>
            <div class="col-md-auto">
              {/*⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ COLUNA 5 ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩*/}
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
              <div className='stock'></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PA;