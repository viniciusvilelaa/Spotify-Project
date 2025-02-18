
import './index.css'

import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Songs from './pages/Songs'
import Song from './pages/Song'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artists' element={<Artists></Artists>}/>
        <Route path='/artist/:id' element={<Artist></Artist>}/>
        <Route path='/songs' element={<Songs></Songs>}/>
        <Route path='/song/:id' element={<Song></Song>}/>
        
      </Routes>
      
    </BrowserRouter>
  )
  
};

export default App

