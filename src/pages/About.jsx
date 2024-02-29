import React from "react";
import BlobPic from '../assets/mask-group.png'
import LaserEyes from "../assets/lasereyes.png"
import ScrollToTop from '../components/ScrollToTop';
import { HiSparkles } from "react-icons/hi2";
import Sparks from '../components/Sparks'
import { motion } from "framer-motion";

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

                        <li className="gradient-border">I took over managing the company's <a href="https://www.mjprinting.com.au" target="_blank" rel="noopener noreferrer">WordPress site</a> and ended up rebuilding it with a theme, then customised it and created all the content, learned SEO best practices, wrote a blog, took all the photos, etc.</li>

                        <li className="gradient-border">Making this website was so much fun that I decided to learn to code for real this time. I joined <a href="http://www.theodinproject.com" target="_blank" rel="noopener noreferrer">The Odin Project</a> and got to work, covering HTML, CSS, JavaScript and Git.</li>

                        <li className="gradient-border">In late 2023 I was accepted into a "digital skills" government program, and took a 3 month JavaScript bootcamp-style course at <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a>.</li>

                        <li className="gradient-border">After that I took the React course at <a href="https://scrimba.com" target="_blank">Scrimba</a>. Now, I'm working my way through their front-end developer career path, working hard on strengthening my React skills, making fun projects with APIs, and learning to use NextJS.</li>
                        
                        <li className="gradient-border">I really enjoy front-end and I'm very interested to learn new frameworks, but I'm also learning Shopify, PHP and SQL among other things. I love to learn and I love the web. 🤝</li>

                        <li className="gradient-border">Aside from coding, I'm also learning to speak French. I enjoy art and design, cool fonts, video games, internet history, baking, and embroidery.</li>
                    </ul>
                </div>

            </div>

        </main>
        
    )
}

