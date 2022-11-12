import React from 'react';
import { useEffect } from 'react';
import './registration.css';

function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro"
 }, []);
  return (
    <div className='cadastro'>
        <h3>Cadastro</h3>
    </div>
  );
}

export default Cadastro;