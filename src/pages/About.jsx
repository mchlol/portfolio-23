import React from "react";
import BlobPic from '../assets/mask-group.png'
import LaserEyes from "../assets/lasereyes.png"
import ScrollToTop from '../components/ScrollToTop';
import { HiSparkles } from "react-icons/hi2";
import Sparks from '../components/Sparks'

export default function About() {

    function handleMouseEnter(e) {
        e.currentTarget.src = LaserEyes;
    }

    function handleMouseOut(e) {
        e.currentTarget.src = BlobPic;
    }
    
    return (
        <main className="about-section">
        <ScrollToTop />
            
            <h2 className="section-header">About</h2>

            <div className="about-section-content">

                <div className="about-img-container">

                    <img 
                    className="about-img" 
                    src={BlobPic} 
                    alt="Michelle in Carlton Gardens" 
                    onMouseEnter={ (e) => handleMouseEnter(e)}
                    onMouseOut={ (e) => handleMouseOut(e)}
                    />

                <div className="about-svg-container">
                    <Sparks />
                </div>

                </div>
                
                <div className="about-section-text">
                    <h3>Fun facts</h3>
                    <ul>
                        <li className="gradient-border">I built and designed websites as a fun hobby in the mid-2000s, usually using Notepad and Microsoft FrontPage (RIP), and usually hosted on Geocities. Ah, so many iframes.</li>

                        <li className="gradient-border">I worked in print for over 16 years, interpreting client design briefs, communicating technical concepts, and bringing ideas to fruition. I also created mad spreadsheets in Excel where I made liberal use of IF functions.</li>

                        <li className="gradient-border">I took over managing the company's <a href="https://www.mjprinting.com.au" target="_blank">WordPress site</a> and ended up rebuilding it with a theme, then customised it and created all the content, learned SEO best practices, wrote a blog, took all the photos, etc.</li>

                        <li className="gradient-border">Making this website was so much fun that I decided to learn to code for real this time, with the aid of <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener">freeCodeCamp</a>, <a href="https://www.theodinproject.com/" target="_blank" rel="noopener">The Odin Project</a>, <a href="https://wesbos.com/courses" target="_blank" rel="noopener">Wes Bos</a>, <a href="https://web.dev/" target="_blank" rel="noopener">Google's Web.dev</a>, etc. I got the bug!</li>

                        <li className="gradient-border">In 2023 I was accepted into a "digital skills" government program, and took a 3 month JavaScript bootcamp-style course at <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a>.</li>

                        <li className="gradient-border">After that I took the React course at <a href="https://scrimba.com" target="_blank">Scrimba</a>. Now, I'm working my way through their front-end developer career path, and learning to use NextJS on the side.</li>
                        
                        <li className="gradient-border">I really enjoy front-end and I'm very interested to learn new frameworks, but hopefully some back-end technologies soon.</li>

                        <li className="gradient-border">Aside from coding, I love art and design, cool fonts, video games (narrative, stealth, wacky physics), early internet history, 90s emo and pop, house plants, crosswords and logic puzzles, baking, and embroidery.</li>
                    </ul>
                </div>

            </div>

        </main>
        
    )
}

