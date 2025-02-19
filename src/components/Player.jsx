import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';


const Player = () => {
  return (
    <div className='player'>
        <div className='player__controllers'>
            <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
            <FontAwesomeIcon className='player__icon player__icon--play' icon={faCirclePlay} />
            <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
        </div>

        <div className="player__progress">
            <p>00:00</p>
            <div className='player__bar'></div>
            <p>02:30</p>
        </div>
            
    </div>
  )
}

export default Player