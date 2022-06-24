import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Cadastrarpet from './pages/cadastrarpet/index.js';
import Consultarpet from './pages/consultarpet/index.js';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/cadastrarpet' element={<Cadastrarpet/>}/>
      <Route path='/consultarpet' element={<Consultarpet/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

