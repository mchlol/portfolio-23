import React from "react";
import peepImage from '../assets/peepImage.png';

export default function Hero() {
    return (
        <div className="hero cols-2">
            <div className="imgSide">
                <h1>Salut!</h1>
                <img src={peepImage} alt="an illustration of a grinning girl with long dark hair and a pink sweater" />
            </div>

            <div className="textSide">
                <p>
                    Hello, I'm Michelle, a digital developer in Melbourne, Australia. 
                </p>
                <p>
                    I'm learning to build for the web. Right now I'm really enjoying working with React and APIs. Check out a few of my projects below!
                </p>
            </div>
                
        </div>
    )
}