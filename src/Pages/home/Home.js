import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './home.css';

function Home() {
  useEffect(() => {
    document.title = "Aurum Investing"
 }, []);
  return (
    <>
    <Navbar/>
      <div className='main-home'>
        <div className='container-cima'>

        </div>
        <div className='container-meio'>
          <div className='container-meio-esquerda'></div>
          <div className='container-meio-direita'></div>

        </div>
        <div className='container-baixo'>

        </div>
      </div>
    </>
  );
}

export default Home;