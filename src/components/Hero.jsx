import React from "react";
import peepImage from '../assets/peepImage.png';

export default function Hero() {
    return (
        <div className="hero segmented">
            <div className="imgSide">
                <img src={peepImage} alt="an open peep illustration of a grinning girl with long dark hair and a pink sweater" />
            </div>

            <div className="textSide">
                <h1>Salut!</h1>
                <p>Hello, I'm Michelle, a digital developer in Melbourne, Australia.</p>

                <p>I specialise in building user interfaces for the web.<br />
                Right now I am really enjoying working with React and displaying data from APIs.
                </p>

                <p>Check out a few of my projects below!</p>
                
            </div>
                
        </div>
    )
}