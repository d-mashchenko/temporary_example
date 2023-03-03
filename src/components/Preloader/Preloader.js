import React from 'react';
import preloader from '../../assets/img/preloader.gif';

import './Preloader.scss';

export function Preloader() {
  return (
    <div className="Preloader">
      <div className="container">
        <img className="Preloader__gif" src={preloader} alt="preloader" />
      </div>
    </div>
  );
}
