import MainPage from './MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Gelleries" element={<p>CACA</p>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
