import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'


const ItemList = ({ title, items, itemArray, path, idPath }) => {
    const isHome = useLocation().pathname === "/"
    const finalItems = isHome ? items : Infinity

    return (

        <div className='item-list'>
            <div className='main__texts'>
                <h2>{title} populares</h2>

                {isHome ? <Link to={path} className='main__link'>Mostrar tudo</Link> : <></>}
                
            </div>


            <div className="item-list__container">
                {itemArray.filter((currentValue, index) => (index < finalItems)).map((currenValue, index) => <SingleItem {...currenValue} idPath={idPath} key={`${title} - ${index}`}></SingleItem>)}

            </div>
        </div>
    )
}

export default ItemList

