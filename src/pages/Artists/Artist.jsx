import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from './SongList';
import { artistArray } from '../../assets/database/artists';
import { songsArray } from '../../assets/database/songs';

const Artist = ({}) => {
  const { id }= useParams();

  const {name , banner } = artistArray.find(artist => artist.id == id)
  
  const arraySongsFiltred = songsArray.filter(song => song.artist == name)
  const randomSong = arraySongsFiltred[Math.floor(Math.random()* arraySongsFiltred.length)]
  

  return (
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`}}>
        
        <h2 className='artist__title'>{name}</h2>
      </div>
      
      <div className="artist__body">
        <h2>Populares</h2>
        
        
        <SongList arraySongsFiltred={arraySongsFiltred} ></SongList>

      </div>
      
      <Link to={`/song/${randomSong.id}`}>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist