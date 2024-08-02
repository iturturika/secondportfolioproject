import React from 'react';
import './HeaderNav.scss';

const HeaderNav = ({ style, setOnClickBurgerMenu }) => {
  return (
    <nav style={style}>
      {setOnClickBurgerMenu ? (
        <h4
          onClick={() => {
            setOnClickBurgerMenu(false);
          }}
        >
          Back
        </h4>
      ) : null}
      <a href="/">About us</a>
      <a href="/">Services</a>
      <a href="/">Use Cases</a>
      <a href="/">Pricing</a>
      <a href="/">Blog</a>
      <button className="header__button">Request a quote</button>
    </nav>
  );
};

export default HeaderNav;
