import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

import './investments.css';

function MyInvestments() {
  return (
    <>
      <Navbar />
      <div className='main-mi'>
        <div className='container-cima-mi'></div>
        <div className='container-baixo-mi'></div>
      </div>
    </>
  );
}

export default MyInvestments;