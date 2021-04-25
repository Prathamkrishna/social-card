import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import landscapephoto from './images/landscapephoto.jpg';
import App from './app.js';

function Whole() {
    const imagee = {
        width: '100%',
        height: '600px'
    }
    const seehowtouse = {
        textDecoration: 'none',
        color: 'black'
    }
    return(
        <div>
            <div className="heading">
                <div>
                    SOCIAL CARD
                </div>
                <div className="externallinktovid">
                    <a href="https://youtu.be/7TG8SRjV14c" target="_blank" rel="noreferrer" style={seehowtouse}>SEE HOW TO USE THIS APP</a>
                </div>
            </div>
            <br />
            <div>
                <img alt="landscapephoto" src={landscapephoto} style={imagee}></img>
                <div className="inImageText">
                    CREATE YOUR OWN SOCIAL CARD.<br /> SHARE IT WITH YOUR FRIENDS.
                </div>
            </div>
            <br />
            <div>
                <div className="templatessection">
                    CHOOSE FROM ONE OF OUR TEMPLATES
                </div>
                <div className="templatesgiven">
                    <App />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Whole />, document.getElementById('root'))
