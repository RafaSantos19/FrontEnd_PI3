import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from './pages/Login/Login.jsx';
import Menu from './components/Menu/Menu.jsx';
import './App.css';

function App() {

  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
      </Routes>
   </Router>
  )
}

export default App
