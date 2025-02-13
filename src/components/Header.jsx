import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={logoSpotify} alt="Logo Spotify" />
        <a href="#"><h1>Spotify</h1></a>
    </div>
  )
}

export default Header