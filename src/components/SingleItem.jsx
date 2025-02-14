import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function SingleItem({artist_image, name}) {
    return (
        <div className='single-item'>
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img className='single-item__image' src={artist_image} alt={name} />
                </div>

                <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />

            </div>

            <div className="single-item__texts">
                    <div className="single-item__2lines">
                        <p className='single-item__title'>{name}</p>
                    </div>
                    <p className="single-item__type">Artista</p>
                </div>
        </div>
    )
}

export default SingleItem