import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';

const Player = ({ duration, artistName }) => {
    const id = useParams().id;
    const arraySongsFiltred = songsArray.filter(song => song.artist == artistName)
    const currentIndex = arraySongsFiltred.findIndex(song => song.id == Number(id))

    const backwardStep = () => {
        if (currentIndex > 0) {
            return `/song/${arraySongsFiltred[currentIndex - 1].id}`
        }

        return `/song/${id}`;
    }

    const forwardStep = () => {
        if ( currentIndex < arraySongsFiltred.length - 1){
            return `/song/${arraySongsFiltred[currentIndex + 1].id}`
        }

        return `/song/${id}`
    }
    
    

    

    return (
        <div className='player'>
            <div className='player__controllers'>
                <Link to={backwardStep()}>
                    <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon className='player__icon player__icon--play' icon={faCirclePlay} />

                <Link to={forwardStep()}>
                    <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
                </Link>
            </div>

            <div className="player__progress">
                <p className='player__time'>00:00</p>
                <div className='player__bar'>
                    <div className="player__bar-progress"></div>
                </div>
                <p className='player__time'>{duration}</p>
            </div>

        </div>
    )
}

export default Player