import './App.css';
//import Header from './Header';
import ListItems from './ListItems';
import Recipe from './Recipe';
import ImgSection from './ImgSection';
import React from 'react';

export default class App extends React.Component {
  render() {
  return (
    <div>
      <ImgSection />
      <Recipe/>
  
      <ListItems caption="1 1/2 cups milk"/>
      <ListItems caption="1/2 cup mascarpone"/>
      <ListItems caption="1/2 tsp pink salt"/>
      <ListItems caption="1 lb Black Mission Figs"/>
      <ListItems caption="1/2 cup brown sugar"/>
      <ListItems caption="2-4 tbsp water"/>
      <ListItems caption="1 1/2 cups heavy cream"/>
      <ListItems caption="granulated sugar"/>
      <ListItems caption="egg yolks"/>
      <ListItems caption="1 lemon, juiced"/>
      <ListItems caption="2 tbsp butter"/>
      <ListItems caption="1 cup honey roasted pecans, roughly chopped"/>
    </div>



  )
}
}

