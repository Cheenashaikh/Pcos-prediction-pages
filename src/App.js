import React from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pcos from './pages/pcos';
import Menarche from './pages/menarche';
import Menopause from './pages/menopause';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pcos' element={<Pcos/>}/>
    <Route path='/minarche' element={<Menarche/>}/>
    <Route path='/menopause' element={<Menopause/>}/>
  </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;

