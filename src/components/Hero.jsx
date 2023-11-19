import React from "react";

import SparksSmall from '../assets/sparks-small.png'
import Sparks from '../assets/sparks.png'


export default function Hero() {
    return (
<>
    <div className="hero">
        
        <div className="hero--content">

            <div className="hero--text">
                <h1>Hello! 👋
                <br />
                I'm Michelle
                </h1>
                <img className="sparks" src={SparksSmall} alt="sparkles"/>

                <h2>I'm a front-end developer in Melbourne, Australia.</h2>
            </div>
            
        </div>

    </div>
</>
    )
}