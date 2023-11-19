import BlobPic from '../assets/mask-group.png'
import React from "react";

import SparksSmall from '../assets/sparks-small.png'
import Sparks from '../assets/sparks.png'

export default function About() {
    return (
        <div className="about-section">
            
            <h2 className="section-header">About Me</h2>

            <div className="about-section-content">

                <div className="about-img-container">

                    <img 
                    className="about-img" 
                    src={BlobPic} 
                    alt="Michelle in Carlton Gardens" 
                    onMouseEnter={() => console.log(`*record scratch* yep, that's me.`)}
                    />

                    <div className="about-sparks-container">
                        <img className="sparks" src={Sparks} alt="sparkles" />
                    </div>

                </div>
                
                <div className="about-section-text">
                    <ul>
                        <li>Built and designed websites as a hobby 20yrs ago using Notepad and Microsoft FrontPage (RIP) hosted on Geocities.</li>
                        <li>Worked in print for over 16 years, working from client brief, communicating technical concepts, bringing ideas to fruition. I also created mad spreadsheets in Excel where I made liberal use of IF functions.</li>
                        <li>I took over managing the WordPress site and ended up rebuilding it from the original theme, then customised it and created all the content, learned best practices, SEO, etc.</li>
                        <li>This sparked learning to code alongside my full time job in 2021, with the aid of freeCodeCamp, The Odin Project, Wes Bos, Google, etc. I got the bug!</li>
                        <li>In 2023 I applied for and was accepted into a "digital skills" government program, and took a 3 month JavaScript bootcamp-style course at General Assembly.</li>
                        <li>After that I took the React course at Scrimba, and am now working my way through their front-end developer career path.</li>
                        <li>I enjoy front-end & I am interested in trying new frameworks and learning new stuff such as CSS animation, TypeScript, PHP, SQL, Python...and French. <em>Salut!</em></li>
                        <li>I love art and design, cool fonts, video games (narrative, stealth, wacky physics), early internet history, 90s emo and pop, plants, crosswords and logic puzzles, baking biscuits, and embroidery.</li>
                    </ul>
                </div>

            </div>

        </div>
        
    )
}

