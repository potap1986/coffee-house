import React from "react";
import './main.scss';

const Main = () => {
  return (
    <main className="main container">
      <h1>Круассан</h1>
      <div>
        <h2>Меню</h2>
        <ul>
          <li>Кофе</li>
          <li>НЕ кофе</li>
          <li>Десерты</li>
        </ul>
        <button>Переход в меню</button>
      </div>
      <div>
        <h2>Галерея</h2>
      </div>
    </main>
  )
}

export default (Main);
