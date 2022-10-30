import "./App.css";
import { React } from "react";
import Home from "./Pages/Home";
import News from "./Pages/News";
import PA from "./Pages/Principais_acoes";
import MI from "./Pages/Meus_investimentos";
import SI from "./Pages/Simular_investimentos";
import Sup from "./Pages/Suporte";
import NavBar from "./Components/Navbar";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/pa' element={<PA/>}/>
            <Route path='/mi' element={<MI/>}/>
            <Route path='/si' element={<SI/>}/>
            <Route path='/suporte' element={<Sup/>}/>
          </Routes>
        </Router>
      </>
  );
}
export default App;
