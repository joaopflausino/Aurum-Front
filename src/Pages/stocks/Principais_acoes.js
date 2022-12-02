import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import './stocks.css';
import imagem_nasdak from '../../shared/images/nasdaq-logo.png';


function PA() {


  //se der problema é isso
  let [stock1, setStock1] = useState("");

// A PORRA DA DATA DE ONTEM 
  let data = new Date();
  let dia = "";

  data.setDate(data.getDate() - 1);
  if (data.getDate() <= 9){
    dia = "0" + data.getDate()
  }
  else{
    dia =  data.getDate()
  }
  let dataFormatada = (data.getFullYear()) + "-" + ((data.getMonth() + 1)) + "-" + (dia); 

  
  




  ///⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ API POR AÇÃO - APPLE ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩

    async function APIGET() {
      let response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=GL7OCY3JYIA7LDPG");
      let result = await response.json();

      const stock1_symbol = result["Meta Data"]["2. Symbol"];
      console.log(stock1_symbol);

      const stock1_price = result["Time Series (Daily)"][dataFormatada]["4. close"];
      console.log(stock1_price);

      const stock1 =  <div>{stock1_symbol}</div>

      //se der problema é isso
      setStock1(stock1);
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
              <div className='stock'>{/*stock1*/}</div>
              <div className='stock'></div>
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