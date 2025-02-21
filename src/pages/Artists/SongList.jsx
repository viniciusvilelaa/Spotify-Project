import React, { useState } from 'react'
import SongItem from './SongItem'

const SongList = ({ arraySongsFiltred }) => {
    let [items, setItems] = useState(5);

    const seeMoreFunction = () => {
        items === 5 ? setItems(10) : setItems(5)
        
    }

    return (
        <div className='song-list'>
            {arraySongsFiltred.filter((currentValue, index) => index < items).map((currentValue, index) => <SongItem {...currentValue} index={index+1} key={`${currentValue} - ${index}`} ></SongItem>)}
            
            <p onClick={seeMoreFunction} className='song-list__see-more'>Ver mais</p>
            
        </div>
    )
}

export default SongList