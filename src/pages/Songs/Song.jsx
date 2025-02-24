import React from 'react'
import Player from '../../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsIndexedById } from '../../assets/database/songs'
import { artistsArray, artistsIndexedByName } from '../../assets/database/artists'

const Song = () => {
  const songId = useParams().id;
  const {artist, image, name, duration} = songsIndexedById[songId]
  const artistObj = artistsIndexedByName[artist]
  
  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
        
      </div>

      <div className='song__bar'>
        <Link to={`/artist/${artistObj._id}`}>
          <img className='song__artist-image' width={75} height={75} src={artistObj.image} alt={`Imagem do artista ${artist}`} />
        </Link>
          
          
          <Player duration={duration} artistName={artist}></Player>
          
          <div className='song_infos'>
            <p className='song__name'>{name}</p>
            <p>{artist}</p>
          </div>
        </div>
      
    </div>
  )
}

export default Song