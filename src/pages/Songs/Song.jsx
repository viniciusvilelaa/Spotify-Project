import React from 'react'
import Player from '../../components/Player'
const Song = () => {
  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src="https://i.scdn.co/image/ab67616d00001e025bb6668a856035550a66fc31" alt="" />
        </div>
        
      </div>

      <div className='song__bar'>
          <img className='song__artist-image' width={75} height={75} src="https://i.scdn.co/image/ab67616d00001e025bb6668a856035550a66fc31" alt="" />
          
          <Player></Player>
          
          <div className='song_infos'>
            <p className='song__name'>Novas historias</p>
            <p>Henrique e Juliano</p>
          </div>
        </div>
      
    </div>
  )
}

export default Song