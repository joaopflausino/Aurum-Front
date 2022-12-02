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
  
  
  //se der problema é isso
  let [stock1, setStock1] = useState("");
  
  

  ///⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩ API POR AÇÃO - APPLE ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩

    async function APIGET() {
      let response = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=GL7OCY3JYIA7LDPG");
      let result = await response.json();
      const stock1_price = parseFloat(result["Global Quote"]["05. price"]);
      const stock1_gain = parseFloat(result["Global Quote"]["09. change"]);
      const stock1_variation = result["Global Quote"]["10. change percent"];
      const stock1 = <><div>{stock1_price}</div><div className='gain-variation'><div className='stock-div-gain'>{stock1_gain}</div><div>{stock1_variation}</div></div>
      
      </>

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