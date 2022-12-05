import "./App.css";
import { React } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/registration/Cadastro";
import News from "./pages/news/News";
import PA from "./pages/stocks/Principais_acoes";
import AI from "./pages/add-investment/AddInvestment";
import MI from "./pages/investments/Meus_investimentos";
import SI from "./pages/simulate-investment/Simular_investimentos";
import MD from "./pages/account/Meus_dados";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddInvestment from "./pages/add-investment/AddInvestment";

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
