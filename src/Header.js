import React, { Component } from 'react'
import mail from './images/mail-icon.png';
import rss from './images/rss-icon.png';
import pint from './images/pint-icon.png';
import flic from './images/flic-icon.png';
import insta from './images/insta-icon.png';
import twit from './images/twit-icon.png';
import fb from './images/fb-icon.png';

export default class Header extends Component {
    render() {
        return (
           
         <div>
            <img className='buttonList' src={mail} alt="mail-icon"></img>
            <img className='buttonList' src={rss} alt="rss-icon"></img>
            <img className='buttonList' src={pint} alt="pint-icon"></img>
            <img className='buttonList' src={flic} alt="flic-icon"></img>
            <img className='buttonList' src={insta} alt="insta-icon"></img>
            <img className='buttonList' src={twit} alt="twit-icon"></img>
            <img className='buttonList' src={fb} alt="fb-icon"></img>

            {/* <img src="./images/mail-icon.png" alt="mail-icon"/>
            <img src="./images/rss-icon.png" alt="rss-icon"/>
            <img src="./images/pint-icon.png" alt="pint-icon"/>
            <img src="./images/flic-icon.png" alt="flic-icon"/>
            <img src="./images/insta-icon.png" alt="insta-icon"/>
            <img src="./images/twit-icon.png" alt="twit-icon"/>
            <img src="./images/fb-icon.png" alt="fb-icon"/> */}
        </div>
        
         

     
        )
    }
}
