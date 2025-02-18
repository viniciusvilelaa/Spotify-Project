import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const MainContainer =   ({type})  => {
    return  (
        <div className='MainContainer'>

            {type === "artists" || type === undefined ? (<ItemList title="Artistas" items={5} itemArray={artistArray} path="/artists" idPath="/artist"></ItemList>) : <></> }

            {type === "songs" || type === undefined ? (<ItemList title="Músicas" items={10} itemArray={songsArray} path="/songs" idPath="/song"></ItemList>) : <></>}
            
            

        </div>
    )
}

export default MainContainer