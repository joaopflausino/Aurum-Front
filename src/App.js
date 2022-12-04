import "./App.css";
import { React } from "react";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Cadastro from "./Pages/registration/Cadastro";
import News from "./Pages/news/News";
import PA from "./Pages/stocks/Principais_acoes";
import AI from "./Pages/add-investment/AddInvestment";
import MI from "./Pages/investments/Meus_investimentos";
import SI from "./Pages/simulate-investment/Simular_investimentos";
import MD from "./Pages/account/Meus_dados";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalStock from "./Pages/add-investment/stock/ModalStock";
import AddInvestment from "./Pages/add-investment/AddInvestment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pa" element={<PA />} />
          <Route path="/add-investment" element={<AddInvestment />} />
          <Route path="/mi" element={<MI />} />
          <Route path="/si" element={<SI />} />
          <Route path="/md" element={<MD />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
