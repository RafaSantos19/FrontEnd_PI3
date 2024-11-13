import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from './pages/Login/Login.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import Agendamento from './pages/Agendamento/Agendamento.jsx';
import Cursos from './pages/Cursos/Cursos.jsx';
import './App.css';

function App() {

  return (
    <Router>
      {/* Menu estará presente em todas as rotas */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/agendamento' element={<Agendamento />} />
        <Route path='/cursos' element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;