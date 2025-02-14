import React from 'react'
import SingleItem from './SingleItem'

function ItemList() {
    return (
        <div className='item-list'>
            <div className='main__texts'>
                <h2>Artistas Populares</h2>
                <a className='main__link' href="/">mostrar tudo</a>
            </div>

            <div className="item-list__container">

                <SingleItem artist_image="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" name="teste"></SingleItem>
            </div>
        </div>
    )
}

export default ItemList