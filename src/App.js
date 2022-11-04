import "./App.css";
import { React } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import News from "./Pages/News";
import PA from "./Pages/Principais_acoes";
import AI from "./Pages/Adicionar_investimento";
import MI from "./Pages/Meus_investimentos";
import SI from "./Pages/Simular_investimentos";
import MD from "./Pages/Meus_dados";
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
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/pa' element={<PA/>}/>
            <Route path='/ai' element={<AI/>}/>
            <Route path='/mi' element={<MI/>}/>
            <Route path='/si' element={<SI/>}/>
            <Route path='/md' element={<MD/>}/>
          </Routes>
        </Router>
      </>
  );
}
export default App;
