import React from 'react'
import Player from '../../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../../assets/database/songs'
import { artistArray } from '../../assets/database/artists'

const Song = () => {
  const { id } = useParams();
  const songP = songsArray.find(song => song.id == id)
  const artistObj = artistArray.find(artist => artist.name == songP.artist)
  
  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src={songP.image} alt="" />
        </div>
        
      </div>

      <div className='song__bar'>
        <Link to={`/artist/${artistObj.id}`}>
          <img className='song__artist-image' width={75} height={75} src={artistObj.image} alt="" />
        </Link>
          
          
          <Player></Player>
          
          <div className='song_infos'>
            <p className='song__name'>{songP.name}</p>
            <p>{songP.artist}</p>
          </div>
        </div>
      
    </div>
  )
}

export default Song