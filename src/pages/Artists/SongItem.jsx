import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({name, image, duration, _id, index}) => {
    return (
        
        <Link to={`/song/${_id}`}  className='song-item'>
            <div className='song-item__left'>
                <p className='song-item__texts'>{index}</p>
                <img className='song-item__image' src={image} alt={`Capa da musica ${name}`} />
                <p className='song-item__texts'>{name}</p>
            </div>
            <p className='song-item__texts'>{duration}</p>
        </Link>
    )
}

export default SongItem