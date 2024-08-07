import React from 'react';
import Search from '../../assets/search.png'
import Icon from '../../assets/Icon.png'
import Menu from '../../assets/navbarMenu.png'
import Theme from '../../assets/theme.png'
import style from './Navbar.module.css'
import Logo from '../../assets/logomark.png'
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg ">
   
      <div className={`d-flex align-items-center justify-content-start gap-3 mx-3 ${style.leftHeading}`}>
      <img  src={Menu} alt="menu"/>
      <img src={Logo} alt="logo"/>
      <a className={`navbar-brand  ${style.navbarHeading}`} href="#">DoIt</a>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
         
        </ul>
      
      </div>
      <div className={`d-flex align-items-center gap-3 ${style.rightHeading}`}>
        <img src={Search} alt="search"/>
        <img src={Icon} alt="icon"/>
        <img src={Theme} alt="theme"/>

      </div>
    </nav>
  );
};

export default Navbar;
