import React, { Component } from 'react'
import chocopizza from './images/choco-pizza.png';
export default class ImgSection extends Component {
    render() {
        return (
            <>
            
            <div>
                <section className="main-section">
                    <h1>
                    Chocolate Pizza
                    </h1>
                    <p>
                        Posted on 15 Dec 2013 / Deserts
                    </p>
                    <p>
                        print
                    </p>
                </section>
            </div>
        
            <div>
                <img className='pizzaPic' src={chocopizza} alt=""></img>
            </div>
            </>
        )
    }
}
