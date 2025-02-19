import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Artist = () => {
  return (
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage: "linear-gradient(to bottom, var(--_shade), var(--_shade)),url(https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9)"}}>
        
        <h2 className='artist__title'>Henrique e Juliano</h2>
      </div>
      
      <div className="artist__body">
      <p className='song-list__title'>Populares</p>
        <div className='song-list'>
          <div className='song-item'>
            <div className='song-item__left'>
              <p>1</p>
              <img className='song-item__image' src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="" />
              <p className='song-item__texts'>song name</p>
            </div>
            <p className='song-item__texts'>2:45</p>
          </div>
        </div>
      </div>

      <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />

    </div>
  )
}

export default Artist