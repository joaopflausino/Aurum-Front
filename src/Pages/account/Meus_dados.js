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
      <Navbar />
      <div className='md'>
        <h3>Meus Dados</h3>
      </div>
    </>

  );
}

export default MD;