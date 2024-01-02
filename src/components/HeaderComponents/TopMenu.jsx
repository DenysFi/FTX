import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopMenu = forwardRef(function TopMenu({dmediaquery}, ref)  {
  const location = useLocation();
  return (
    <div ref={ref} data-mediaquery={dmediaquery} className="header__top-menu top-menu-header">
        <div className="top-menu-header__container">
          <nav className="top-menu-header__menu">
            <div className={'top-menu-header__item ' + ((location.pathname === '/client' && '_active') || '')}>
              <Link to={'/client'}>CLIENT</Link>
                {/* <a href="#/"> CLIENT</a> */}
              </div>
            <div className={'top-menu-header__item ' + (location.pathname === '/FTX' && '_active') || ''}>
              <Link to={'/FTX'}>PARTNERS</Link>
                {/* <a href="#/"> PARTNERS</a> */}
            </div>
          </nav>
          <div className="top-menu-header__body">
            <a href='#/' className="top-menu-header__help">HELP & SUPPORT</a>
            <div className="top-menu-header__language">
            EN
            </div>
          </div>
        </div>
      </div>
  );
});

export default TopMenu;