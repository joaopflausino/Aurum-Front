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
      <div className='home'>
        <h3>Home</h3>
      </div>
    </>
  );
}

export default Home;