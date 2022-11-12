import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './account.css';

function MD() {
  useEffect(() => {
    document.title = "Meus dados"
 }, []);
  return (
    <>
    <Navbar/>
      <div className='main'>
        <div className='container'></div>
      </div>
    </>
  );
}

export default MD;