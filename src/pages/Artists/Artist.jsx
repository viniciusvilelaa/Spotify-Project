import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from './SongList';
import { artistArray } from '../../assets/database/artists';
import { songsArray } from '../../assets/database/songs';

const Artist = ({}) => {
  const { id }= useParams();

  let artist = artistArray.find(artist => artist.id == id)
  
  return (
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artist.banner})`}}>
        
        <h2 className='artist__title'>{artist.name}</h2>
      </div>
      
      <div className="artist__body">
        <h2>Populares</h2>
        
        
        <SongList artistName={artist.name}></SongList>

      </div>

      <Link to="/song/1">
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist