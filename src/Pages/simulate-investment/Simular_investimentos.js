import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import './simulate.css';

function SI() {
  useEffect(() => {
    document.title = "Simular investimento"
 }, []);
  return (
    <>
      <Navbar />  
        <div className='main-si'>
          <div className='container-si'>
            <form className='compound-form'>
            <div className='input-group'>
              <label for='initialamount'>Inicial Amount</label>
              <input type="number" id="initialamount"></input>
            </div>
            <div className='input-group'>
              <label for='years'>Investment Years</label>
              <input type="number" id="initialamount"></input>
            </div>
            <div className='input-group'>
              <label for='rates'>Estimated Rate(%)</label>
              <input type="number" id="initialamount"></input>
            </div>
            <div className='input-group'>
              <label for='amount'>Compound Interval</label>
              <select id="compound">
                <option value='1'>Annualy</option>
                <option value='2'>Semiannualy</option>
                <option value='4'>Quartely</option>
                <option value='12'>Monthly</option>
              </select>
            </div>
            <div className='input-group'>
              <button>calculate</button>
            </div>
            </form>
          </div>
        </div>
        
    </>

  );
}

export default SI;