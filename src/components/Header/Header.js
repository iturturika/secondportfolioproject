import React from 'react';
import './Header.scss';
import logo_black from '../../images/logo_black.svg';
import burger_menu from '../../images/burger_menu.svg';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = ({ setOnClickBurgerMenu, onClickBurgerMenu }) => {
  return (
    <header>
      <img src={logo_black} alt="logo" className="logo" />
      <HeaderNav />
      <img
        src={burger_menu}
        alt="burger_menu"
        className="burger-menu"
        onClick={() => {
          setOnClickBurgerMenu(!onClickBurgerMenu);
        }}
      />
    </header>
  );
};

export default Header;
