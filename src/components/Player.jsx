import React, { useState } from 'react'
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';

const Player = ({ duration, audio }) => {
    console.log(audio)
    const audioRef = useRef(null);
    
    const [songStatus, setSongStatus] = useState({
        isPlaying: false,
        currentTime: 0,
    });

    const updateStatusSong = (playingStatus, curretTimeStatus) =>{
        setSongStatus({
            isPlaying: playingStatus,
            currentTime: curretTimeStatus
        })
        
            
    }

    const { isPlaying, currentTime } = songStatus;


    const playPauseMusic = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()

        updateStatusSong(!songStatus.isPlaying, audioRef.current.currentTime)

    }

    const getRandomMusic = () => {
        const maxIndex = songsArray.length;
        let randomNumber = Math.floor(Math.random() * maxIndex)
        let randomId = songsArray[randomNumber]._id;


        return `/song/${randomId}`;
    };







    return (
        <div className='player'>
            <audio ref={audioRef} src={audio}></audio>
            <div className='player__controllers'>
                <Link to={getRandomMusic()}>
                    <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon className='player__icon player__icon--play' icon={faCirclePlay} onClick={playPauseMusic} />

                <Link to={getRandomMusic()}>
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