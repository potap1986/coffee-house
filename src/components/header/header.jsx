import React from "react";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <ul className="header__nav">
        <li className="">Новинки</li>
        <li className="">Меню</li>
        <li className="">Контакты</li>
      </ul>
    </header>
  )
}

export default (Header);
