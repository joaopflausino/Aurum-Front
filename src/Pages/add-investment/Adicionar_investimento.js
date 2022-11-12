import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './add-investment.css';

function AI() {
  useEffect(() => {
    document.title = "Adicionar investimento"
 }, []);
  return (
    <>
      <Navbar />
      <div className='ai'>
        <h3>Adicionar investimento</h3>
      </div>
    </>
  );
}

export default AI;