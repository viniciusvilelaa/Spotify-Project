import React from 'react'
import SingleItem from './SingleItem'
import { Link } from 'react-router-dom'


const ItemList= ({title, items, itemArray, path, idPath}) => {
    return (
        
        <div className='item-list'>
            <div className='main__texts'>
                <h2>{title} populares</h2>
                <Link to={path} className='main__link'>Mostrar tudo</Link>
            </div>


            <div className="item-list__container">
                
                {itemArray.filter((currentValue, index) => (index < items)).map((currenValue,index) => <SingleItem {...currenValue} idPath={idPath} key={`${title} - ${index}`}></SingleItem>)}
                
                
            
            </div>
        </div>
    )
}

export default ItemList

