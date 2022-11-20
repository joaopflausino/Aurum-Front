import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './stocks.css';

function MainStocks() {
  return (
    <>
      <Navbar />
      <div className='pa'>
        <h3>Principais acoes</h3>
      </div>
    </>
  );
}

export default MainStocks;