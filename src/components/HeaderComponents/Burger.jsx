import React from 'react';
import {handleMenu} from '../../utiles/utiles';

const Burger = () => {
    // function handleMenu(){
    //     if(!document.documentElement.classList.contains('menu-open')){
    //         document.documentElement.classList.add('menu-open');
    //         toggleLock();
    //     }
    //     else{
    //         document.documentElement.classList.remove('menu-open');
    //         toggleLock();
    //     }
    // }

    // function toggleLock(){
    //     document.documentElement.classList.toggle('lock');
    // }
    return (
        <div className='menu-header__icon-wrapper'>
            <button onClick={handleMenu} type="button" className="menu-header__icon icon-menu"><span></span></button>
        </div>
    )
};

export default Burger;