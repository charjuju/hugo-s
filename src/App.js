import MainPage from './MainPage'
import Info from './Info'
import Gelleries from './Gelleries'
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="conteneur-navbar">
            <NavBar />
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Gelleries" element={<Gelleries />} />
            <Route path="/Book" element={<Gelleries />} />
            <Route path="/Chapter" element={<Gelleries />} />
            <Route path="/Info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function NavBar() {
  const navigate = useNavigate();

  function ButtonNavigation() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
          <p onClick={() => navigate('/Info')}>Info</p>
          <p style={{marginLeft: '20px'}} onClick={() => navigate('/Gelleries')}>Gelleries</p>
      </div>
    );
  }

  return (
    <div className="nev-bar">
      <h1 onClick={() => navigate('/')} style={{ font: 'Monospace' }}>Hugo Segato</h1>
      <ButtonNavigation />
    </div>
  );
}

export default App;
