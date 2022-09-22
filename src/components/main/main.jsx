import React from "react";
import Slider from "react-slick";
import './main.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// https://techrocks.ru/2021/12/25/snowfall-effect-with-html-and-css/

const Main = () => { 
  const random = (num) => { return Math.floor(Math.random() * num) }
  const stars = Array.apply(null, {length: 50}).map(Number.call, Number)    
  const sliders = Array.apply(null, {length: 12}).map(Number.call, Number)  
  const menu = [
    {
      name: "Кофе",
      categories: ["Эспрессо", "Эспрессо доппио", "Флэт уайт", "Американо", "Капучино", "Латте", "Раф", "Мокко", "Карамелатте"]
    },
    {
      name: "Чай",
      categories: ["Черный", "Эрл грей", "Зеленый", "Пряный чай латте", "Матча латте"]
    },
    {
      name: "Какао",
      categories: ["Какао", "Какао со взбитыми сливками"]
    },
  ]
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear"
  };

  return (
    <main className="main">
      {stars.map((item) => {
        const styles = {
          "--left": (random(100) + "vw"),
          "--left-ini": (random(20) - 10  + "vw"), 
          "--left-end": (random(20) - 10 + "vw"),
          "--speed": (5 + random(15) + "s"), 
          "--size": (random(5) * 0.2 + "vw"), 
          "--delay": ("-" + random(15) + "s"),
        }
                
        return <div 
            key={item} 
            className="snowflake" 
            style={styles}>            
          </div>
      })}
      <h1 className="main__title">КРУАССАН</h1>
      <div className="main__body container">
        <div>
          <h2>Меню</h2>
          {menu.map(item => 
            <div>
              <h3>{item.name}</h3>
              <ul>
                {(item.categories).map(position =>
                  <li>{position}</li>
                )}
              </ul>
            </div>
            )}
          
          <button className="main__button-menu">Переход в меню</button>
        </div>
        <div>
          <h2>Галерея</h2>
          <Slider {...settings} className="main__slider">
            {sliders.map(item => 
              <div key={"slide" + item} className="main__slide">
                <img src={"../img/slick/" + (item + 1) + ".jpg"} alt="кафе" />
              </div>
              )}
          </Slider>
        </div>
      </div>
    </main>
  )
}

export default (Main);
