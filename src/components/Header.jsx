import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/"><img src={logoSpotify} alt="Logo Spotify" /></Link>
        
        <Link to="/"  className='header__link' href="#"><h1>Spotify</h1></Link>
    </div>
  )
}

export default Header