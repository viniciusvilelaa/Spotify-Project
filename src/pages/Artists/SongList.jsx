import React from 'react'
import SongItem from './SongItem'
import { songsArray } from '../../assets/database/songs';

const SongList = ({ arraySongsFiltred }) => {
    let items = 5;
    console.log(arraySongsFiltred)
    
    let seeMoreElemente = document.getElementsByClassName("song-list__see-more")
    
    const seeMoreFunction = () => {
        items === 5 ? items = 10 : items = 5
        console.log(items)
    }

    return (
        <div className='song-list'>
            {arraySongsFiltred.filter((currentValue, index) => index < items).map((currentValue, index) => <SongItem {...currentValue} index={index+1} key={`${currentValue} - ${index}`} ></SongItem>)}
            {console.log(items)}
            <p onClick={seeMoreFunction} className='song-list__see-more'>Ver mais</p>
            
        </div>
    )
}

export default SongList