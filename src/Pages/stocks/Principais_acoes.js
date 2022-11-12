import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './stocks.css';

function PA() {
  useEffect(() => {
    document.title = "Principais ações"
 }, []);
  return (
    <>
      <Navbar />
      <div className='pa'>
        <h3>Principais acoes</h3>
      </div>
    </>
  );
}

export default PA;