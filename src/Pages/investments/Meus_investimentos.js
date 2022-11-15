import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './investments.css';

function MI() {
  useEffect(() => {
    document.title = "Meus investimentos"
 }, []);
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

export default MI;