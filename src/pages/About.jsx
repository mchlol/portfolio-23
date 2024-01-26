import React from "react";
import BlobPic from '../assets/mask-group.png'
import LaserEyes from "../assets/lasereyes.png"
import Sparks from '../assets/Sparks.png'

export default function About() {

    function handleMouseEnter(e) {
        e.currentTarget.src = LaserEyes;
    }

    function handleMouseOut(e) {
        e.currentTarget.src = BlobPic;
    }
    
    return (
        <section className="about-section">
            
            <h2 className="section-header">About Me</h2>

            <div className="about-section-content">

                <div className="about-img-container">

                    <img 
                    className="about-img" 
                    src={BlobPic} 
                    alt="Michelle in Carlton Gardens" 
                    onMouseEnter={ (e) => handleMouseEnter(e)}
                    onMouseOut={ (e) => handleMouseOut(e)}
                    />

                    <div className="about-sparks-container">
                        <img className="sparks" src={Sparks} alt="sparkles" />
                    </div>

                </div>
                
                <div className="about-section-text">
                    <ul>
                        <li>Built and designed websites as a hobby 20yrs ago using Notepad and Microsoft FrontPage (RIP) hosted on Geocities.</li>
                        <li>Worked in print for over 16 years, working from client brief, communicating technical concepts, bringing ideas to fruition. I also created mad spreadsheets in Excel where I made liberal use of IF functions.</li>
                        <li>I took over managing the <a href="https://www.mjprinting.com.au" target="_blank">WordPress site</a> and ended up rebuilding it from the original theme, then customised it and created all the content, learned SEO best practices, wrote a blog, took all the photos, etc.</li>
                        <li>This sparked learning to code alongside my full time job in 2021, with the aid of <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>, <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a>, <a href="https://wesbos.com/courses" target="_blank">Wes Bos</a>, <a href="https://web.dev/" target="_blank">Google</a>, etc. I got the bug!</li>
                        <li>In 2023 I applied for and was accepted into a "digital skills" government program, and took a 3 month JavaScript bootcamp-style course at General Assembly.</li>
                        <li>After that I took the React course at <a href="https://scrimba.com" target="_blank">Scrimba</a>, and am now working my way through their front-end developer career path.</li>
                        <li>I enjoy front-end and I'm very interested to learn new frameworks and hopefully some back-end technologies soon.</li>
                        <li>I love art and design, cool fonts, video games (narrative, stealth, wacky physics), early internet history, 90s emo and pop, plants, crosswords and logic puzzles, baking biscuits, and embroidery.</li>
                    </ul>
                </div>

            </div>

        </section>
        
    )
}

