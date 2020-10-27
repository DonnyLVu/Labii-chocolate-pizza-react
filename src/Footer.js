import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
            <section>
            <h2 id="Vanessa"> Vanessa Stevenson</h2>
                <p id="bio">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am. 
                </p>
            <div id="shareButtonDiv">
                <button id="shareButton">SHARE RECIPE</button>
            </div>    
            </section>

            <div>
              <div class="footerText"> Delicious &copy; 2013 . All Rights Reserved.
                <p>Proudly published with Ghost.</p>
            </div>  
            </div>
            </>
        )
    }
}
