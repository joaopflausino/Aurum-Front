import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './stocks.css';
import imagem_nasdak from '../../shared/images/nasdaq-logo.png';

function PA() {
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
              <div className='stock'></div>
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