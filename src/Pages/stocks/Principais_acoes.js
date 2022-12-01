import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './stocks.css';

function PA() {
  useEffect(() => {
    document.title = "Aurum Investing"
 }, []);
  return (
    <>
      <Navbar />
      <div className='main-pa'>
        <div className='container-cima-pa'>
        </div>
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