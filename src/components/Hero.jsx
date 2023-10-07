import React from "react";
import peepImage from '../assets/peepImage.png';

export default function Hero() {
    return (
<>
    <div className="hero">

        <div class="hero--content">
            <h1>Salut!</h1>
            <h2><em>J'ai un ordinateur.</em></h2>
            <p>Some more words.</p>

            <div class="blob--container">
            <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#E8DAFF" d="M33.8,-46.2C46.8,-44.1,62.7,-40,72.6,-29.8C82.6,-19.5,86.7,-3.2,84.5,12.1C82.2,27.5,73.6,41.9,62.6,53.6C51.5,65.3,37.9,74.2,24.5,73.6C11.1,73.1,-2.3,63.1,-17,58.5C-31.7,53.9,-47.9,54.7,-58.6,47.7C-69.4,40.8,-74.8,26.2,-74.4,12.2C-74,-1.7,-67.8,-14.9,-57.8,-22.1C-47.8,-29.3,-34.1,-30.5,-23.9,-33.9C-13.6,-37.2,-6.8,-42.7,1.8,-45.5C10.3,-48.2,20.7,-48.3,33.8,-46.2Z" transform="translate(100 100)" />
            </svg>
        </div>
        </div>
            
       

    </div>
</>
    )
}