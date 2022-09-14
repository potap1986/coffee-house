import React from 'react';
// import PropTypes from "prop-types";
import './app.scss';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
// import SectionSlider from '../section-slider/section-slider';
// import Tabs from '../tabs/tabs';
// import Calculator from '../calculator/calculator';
// import PopupEnter from '../potup-enter/popup-enter';
// import PopupInfo from '../potup-info/popup-info';
// import MapContacts from '../map-contacts/map-contacts'
// import { connect } from 'react-redux'

const App = () => {
  

  return (
    <>
      <Header />
      <Main />
      {/* <main className="page-main">
        <SectionSlider />
        <Tabs />
        <Calculator />
        <MapContacts />
      </main>*/}
      <Footer /> 
    </>
  );
}


export default (App);