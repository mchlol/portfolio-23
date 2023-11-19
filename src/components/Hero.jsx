import React from "react";
import BlobPic from '../assets/mask-group.png'

export default function Hero() {
    return (
<>
    <div className="hero">

        <div className="hero--content">

            <img className="hero-img" src={BlobPic} alt="michelle in Carlton Gardens" />

            <div className="hero--text">
                <h1>Salut!</h1>
                <p>Hi, I'm Michelle 👋 I'm a front end developer in Melbourne, Australia. 🇦🇺</p>
            </div>
            
        </div>
            
       

    </div>
</>
    )
}