import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function MainContainer() {
  return (
    <div className='MainContainer'>
        

        <div className='item-list'>
            <div className='main__texts'>
                <h2>Artistas Populares</h2>
                <a className='main__link' href="/">mostrar tudo</a>
            </div>
            
            
            <div className="item-list__container">
                <div className="single-item">
                    <div className="single-item__div-image-bottom">
                        <div className='single-item__div-image'>
                            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista" />
                        </div>

                        <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
                    </div>
                    
                    <div className="single-item_texts">
                        <p className='single-item__title '>Herique Juliano Herique Juliano Herique Juliano</p>
                        <p className='single-item__type'>Artista</p>
                    </div>
                    
                </div>

                
            
                
            </div>
            
            
        </div>
    </div>
  )
}

export default MainContainer