import React from "react";
import './header.scss';

const Header = () => {
  return (
    <header className="header container">
      <div className="header__logo">
        <svg width="200" height="30" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_1">
            <title>Layer 1</title>
            <g id="svg_19">
            <line stroke="#CC7C65" stroke-width="10" id="svg_20" y2="187.20001" x2="764.00377" y1="187" x1="5.00002" fill="#CC7C65"/>
            <path id="svg_21" d="m5,5l759.00002,0.20001" opacity="undefined" stroke-width="10" stroke="#CC7C65" fill="#CC7C65"/>
            </g>
          </g>
        </svg>
      </div>
      <ul className="header__nav">
        <li className="">Новинки</li>
        <li className="">Меню</li>
        <li className="">Контакты</li>
      </ul>
    </header>
  )
}

export default (Header);
