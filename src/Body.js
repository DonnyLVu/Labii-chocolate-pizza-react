import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <>
            <div>
                <section className="main-section">
                    <h1 id="pizzaTitle">
                    Chocolate Pizza
                    </h1>
                    <p id="date">
                        Posted on 15 Dec 2013 / Deserts
                    </p>
                    <p id="print">
                        print
                    </p>
                    </section>
            </div>


            <div >
                <img id="pizzaImage" src="./assets/choco-pizza.png" alt=""/>
            </div>

            <div id="mainText">             
                <p>
                    For the fig-swirl: Melt butter over medium heat in saucepan. Add brown Sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. 
                Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or more two stirs, set aside and let cool comoletely.
                </p>
                <p>
                Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. 
                Set mixture in the fridge and wait until the fig mixture is cooled.
                </p>
                <p>
                Using an ice cream maching, pour liquids into the frozen basin and process according to the manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone,
                fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving. 
                </p>
            </div>

            <section>
            <h2 id="Vanessa"> Vanessa Stevenson</h2>
                <p id="bio">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am. 
                </p>
            <div id="shareButtonDiv">
                <button id="shareButton">SHARE RECIPE</button>
            </div>    
            </section>

            </>
        )
    }
}
