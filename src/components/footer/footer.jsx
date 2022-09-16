import React from "react";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__logo"></div>
      <div className="footer__contacts">
        <h2 className="footer__title">Контакты</h2>
        <ul className="footer__nav">
          <li className="">Адрес: ул. Гагарина, 34, Рассказово, Тамбовская обл., 393250</li>
          <li className="">Режим работы: с 10 до 22, без выходных</li>
        </ul>
      </div>
      <div className="">
        <h2 className="footer__title">Мы в социальных сетях:</h2>
        <ul className="footer__nav">
          <li className=""> Одноклассники </li>
          <li className=""> В контакте </li>
          <li className=""> Инстаграм </li>
        </ul>
      </div>
    </footer>
  )

}

export default (Footer);
