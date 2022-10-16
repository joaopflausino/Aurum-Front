import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home.js";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  )
}

export default App;
