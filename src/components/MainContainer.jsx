import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const MainContainer =   ()  => {
    return  (
        <div className='MainContainer'>


           <ItemList title="Artistas" items={5} itemArray={artistArray} path="/artists" idPath="/artist"></ItemList>
           <ItemList title="Músicas" items={10} itemArray={songsArray} path="/songs" idPath="/song"></ItemList>
        </div>
    )
}

export default MainContainer