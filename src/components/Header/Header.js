import React from 'react';
import './Header.scss';
import logo_black from '../../images/logo_black.svg';

const Header = () => {
  return (
    <header>
      <img src={logo_black} alt="logo" className="logo" />
      <nav>
        <a href="/">About us</a>
        <a href="/">Services</a>
        <a href="/">Use Cases</a>
        <a href="/">Pricing</a>
        <a href="/">Blog</a>
        <button className="header__button">Request a quote</button>
      </nav>
    </header>
  );
};

export default Header;
