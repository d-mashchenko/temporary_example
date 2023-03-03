import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/UKAD_logo.png';
import { SearchField } from '../SearchField/SearchField';
import './Header.scss';

export function Header() {
  return (
    <div className="Header">
      <div className="Header__container container">
        <NavLink className="Header__logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav>
          <NavLink className="Header__link" to="/">
            Home
          </NavLink>
          <NavLink className="Header__link" to="/products">
            Dogs
          </NavLink>
        </nav>
        <SearchField />
      </div>
    </div>
  );
}
