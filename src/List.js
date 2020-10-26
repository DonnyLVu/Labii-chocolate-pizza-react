import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="checkbox" >
                    <label  for="ingredients">1 1/2 cups milk </label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-1" for="ingredients">1/2 cup mascarpone</label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-1" for="ingredients">1/2 tsp pink salt</label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-1" for="ingredients">1 lb Black Mission Figs</label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-1" for="ingredients">1/2 cup brown sugar</label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-1" for="ingredients">2-4 tbsp water</label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-2" for="ingredients">1 1/2 cups heavy cream </label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-2" for="ingredients">granulated sugar</label>
                  </div>
                  <div>
                    <input type="checkbox" >
                    <label className="list-2" for="ingredients">egg yolks</label>
                  </div>
                  <div>
                    <input type="checkbox"  >
                    <label className="list-2" for="ingredients">1 lemon, juiced</label>
                  </div>  <div>
                    <input type="checkbox"  >
                    <label className="list-2" for="ingredients">2 tbsp butter</label>
                  </div>  <div>
                    <input type="checkbox"  >
                    <label className="list-2" for="ingredients">1 cup honey roasted pecans, roughly<br><indent id="chopped">chopped</indent> </label>
                  </div>
            </div>
            </div>
        )
    }
}
