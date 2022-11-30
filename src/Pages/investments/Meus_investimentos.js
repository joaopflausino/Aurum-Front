import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './investments.css';
import DoughnutChart from '../../Components/DoughnutChart';
import Areachart from '../../Components/Areachart';

function MI() {
  useEffect(() => {
    document.title = "Aurum Investing"
 }, []);
  return (
    <>
      <Navbar />
      <div className='main-mi'>
        <div className='container-cima-mi'>
          <DoughnutChart/>
        </div>
        <div className='container-baixo-mi'>
          <Areachart/>
        </div>
      </div>
    </>
  );
}

export default MI;