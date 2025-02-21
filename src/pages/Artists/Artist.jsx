import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from './SongList';
import { artistArray } from '../../assets/database/artists';
import { songsArray } from '../../assets/database/songs';

const Artist = ({}) => {
  const { id }= useParams();

  const artistObj = artistArray.find(artist => artist.id == id)
  
  const songsFiltred = songsArray.filter(song => song.artist == artistObj.name)
  const randomSong = songsFiltred[Math.floor(Math.random()* songsFiltred.length)]
  

  return (
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`}}>
        
        <h2 className='artist__title'>{artistObj.name}</h2>
      </div>
      
      <div className="artist__body">
        <h2>Populares</h2>
        
        
        <SongList artistName={artistObj.name}></SongList>

      </div>
      
      <Link to={`/song/${randomSong.id}`}>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist