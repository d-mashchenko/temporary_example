import React from "react";
import arrow from "../../assets/img/Arrow.png";

import "./PrevButton.scss";

export function PrevButton() {
  return (
    <div className="PrevButton prev">
      <div className="PrevButton__ellips">
        <img className="PrevButton__icon" src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
