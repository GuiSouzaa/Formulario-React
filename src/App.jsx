// src/App.jsx
import React from 'react';
import './pages/Formulario.css'; 
import Formulario from './pages/Formulario.jsx';
import ExibirDados from './components/ExibirDados.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  return (
    <div className="App">
      {id ? <ExibirDados /> : <Formulario />}
    </div>
  );
}

export default App;
