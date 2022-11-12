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
      <div className='mi'>
        <h3>Meus Investimentos</h3>
      </div>
    </>
  );
}

export default MI;