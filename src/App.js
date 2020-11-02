import './App.css';
import Header from './Header';
import ListItems from './ListItems';
import Recipe from './Recipe';
import ImgSection from './ImgSection';
import React from 'react';
import Footer from './Footer.js';


export default class App extends React.Component {
  render() {
  return (
    <div>
      <Header/>
      <ImgSection/>
      <Recipe/>
      <ListItems/>
      <Footer/>
    </div>



  )
}
}

