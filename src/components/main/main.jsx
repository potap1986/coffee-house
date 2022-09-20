import React from "react";
import './main.scss';


// https://techrocks.ru/2021/12/25/snowfall-effect-with-html-and-css/

const Main = () => { 
  const random = (num) => { return Math.floor(Math.random() * num) }
  const stars = Array.apply(null, {length: 50}).map(Number.call, Number)
  console.log(stars)

  return (
    <main className="main">
      <h1 className="main__title">КРУАССАН</h1>
      {stars.map((item) => {
        const styles = `--left: ${random(100)}vw; --left-ini: ${random(20) - 10}vw; --left-end: ${random(20) - 10}vw; --speed: ${5 + random(15)}s; --size: ${random(5) * 0.2}vw; --delay: -${random(15)}s;`
        
        return <div 
          key={item} 
          className="snowflake"
          style={styles}>
            {/* <svg width="300" height="200">
              <polygon points="100,10 40,198 190,78 10,78 160,198"
              style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
            </svg> */}
        </div>
      })}
      <div className="main__body container">
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
      </div>
    </main>
  )
}

export default (Main);
