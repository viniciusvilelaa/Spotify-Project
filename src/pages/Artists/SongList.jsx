import React from 'react'
import SongItem from './SongItem'
import { songsArray } from '../../assets/database/songs';

const SongList = ({artistName}) => {
    let items = 5;
    
    return (
        <div className='song-list'>
            {songsArray.filter(song => song.artist == artistName).slice(0,items).map((currentValue, index) => <SongItem {...currentValue} index={index+1} key={`${artistName} - ${index}`} ></SongItem>)}
            
            <p className='song-list__see-more'>Ver mais</p>
            
        </div>
    )
}

export default SongList