import React, {  useRef } from 'react';
import FtxButton from '../common/ftxButton/Button';
import TopMenu from './TopMenu';
import Burger from './Burger';
import { Link, useLocation  } from 'react-router-dom';
// import useMediaChange from '../../hooks/useMediaChange';

const Header = () => {
  const targetRef = useRef(null);
  const location = useLocation();
  return (
    <header className="header">
      <TopMenu ref ={targetRef} dmediaquery="767" />
      <div className="header__menu menu-header">
        <div className="menu-header__container">
          <div className="menu-header__top">
            <div className="menu-header__logo">
              <img src='../../../FTX/img/header/logo.png' loading='lazy' alt="logo" />
            </div>
            <Burger/>
          </div>

          {/* {isMoveble && <TopMenu dmediaquery="767" ref ={targetRef}/>} */}
          <nav className="menu-header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/"} className={'nav__link ' + (location.pathname === '/' && '_active')} >Trading</Link>
                  {/* <a href="#/" className="nav__link _active">Trading</a> */}
              </li>
              <li className="nav__item">
                <Link to={"/markets"} className={'nav__link ' + (location.pathname === '/markets' && '_active')}>Trading Markets</Link>
              </li>
              <li className="nav__item">
                  <Link to={"/Capital"} href="#/" className={'nav__link ' + (location.pathname === '/Capital' && '_active')}>Capital Available </Link>
              </li>
              <li className="nav__item">
                  <Link to={"/Copy"} href="#/" className={'nav__link ' + (location.pathname === '/Copy' && '_active')}> Copy Trading</Link>
              </li>
              <li className="nav__item">
                  <Link to={"/Education"} href="#/" className={'nav__link ' + (location.pathname === '/Education' && '_active')}> Education</Link>
              </li>
              <li className="nav__item">
                  <Link to={"/Company"} href="#/" className={'nav__link ' + (location.pathname === '/Company' && '_active')}> Company</Link>
              </li>
            </ul>
          </nav>
          <div className="menu-header__buttons">
              <FtxButton link={true} modif={['menu-header__button', '_transperent']}>Client Login</FtxButton>
              <FtxButton  link={true} modif={['menu-header__button']}>Start Trading</FtxButton>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;