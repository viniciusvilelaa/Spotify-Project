import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from './SongList';
import { artistsArray, artistsIndexedById } from '../../assets/database/artists';
import { songsArray, songsIndexedByArtist } from '../../assets/database/songs';

const Artist = ({}) => {
  const { id }= useParams();

  const {name , banner } = artistsIndexedById[id]
  const songsArray = songsIndexedByArtist[name];
  const randomSongIndex = Math.floor(Math.random() * songsArray.length);
 
  return (
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`}}>
        
        <h2 className='artist__title'>{name}</h2>
      </div>
      
      <div className="artist__body">
        <h2>Populares</h2>
        
        
        <SongList arraySongsFiltred={songsArray} ></SongList>

      </div>
      
      <Link to={`/song/${songsArray[randomSongIndex]._id}`}>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist