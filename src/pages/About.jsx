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
        <main className="about-section">
            
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

                <div className="svg-container">
                <svg width="65" height="75" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.5559 35.2985L56.6101 37.303C49.3503 39.1361 43.6758 46.0529 42.1705 54.9095L40.5279 64.5969L38.8854 54.9095C37.3801 46.0529 31.7056 39.1361 24.442 37.303L16.5 35.2985L24.442 33.2939C31.7056 31.4609 37.3801 24.5402 38.8854 15.6874L40.5279 6L42.1705 15.6874C43.6758 24.5402 49.3503 31.4609 56.6101 33.2939L64.5559 35.2985Z" fill="#D9D9D9"/>
                    <path d="M23 61.6854L17.2897 62.2628C14.5733 62.7897 12.4521 64.7833 11.8905 67.3312L11.2751 75L10.6598 67.3312C10.0982 64.7833 7.97694 62.7897 5.26053 62.2628L0 61.6854L5.26053 61.108C7.97694 60.5811 10.0982 58.5875 10.6598 56.0376L11.2751 46L11.8905 56.0376C12.4521 58.5875 14.5733 60.5811 17.2897 61.108L23 61.6854Z" fill="#D9D9D9"/>
                    <path d="M18.3932 8.32689L16.3467 8.89853C14.4717 9.42063 13.0083 11.3871 12.6196 13.9023L12.1966 16.6576L11.7736 13.9023C11.3848 11.3871 9.92145 9.42063 8.05028 8.89853L6 8.32689L8.05028 7.75906C9.92145 7.23696 11.3848 5.27052 11.7736 2.75149L12.1966 0L12.6196 2.75149C13.0083 5.27052 14.4717 7.23696 16.3467 7.75906L18.3932 8.32689Z" fill="#D9D9D9"/>
                </svg>

                </div>

                </div>
                
                <div className="about-section-text">
                    <h3>Fun facts</h3>
                    <ul>
                        <li>I built and designed websites as a fun hobby in the mid-2000s, usually using Notepad and Microsoft FrontPage (RIP), and usually hosted on Geocities. Ah, so many iframes.</li>
                        <li>I worked in print for over 16 years, interpreting client design briefs, communicating technical concepts, and bringing ideas to fruition. I also created mad spreadsheets in Excel where I made liberal use of IF functions.</li>
                        <li>I took over managing the company's <a href="https://www.mjprinting.com.au" target="_blank">WordPress site</a> and ended up rebuilding it with a theme, then customised it and created all the content, learned SEO best practices, wrote a blog, took all the photos, etc.</li>
                        <li>Making this website was so much fun that I decided to learn to code for real this time, with the aid of <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener">freeCodeCamp</a>, <a href="https://www.theodinproject.com/" target="_blank" rel="noopener">The Odin Project</a>, <a href="https://wesbos.com/courses" target="_blank" rel="noopener">Wes Bos</a>, <a href="https://web.dev/" target="_blank" rel="noopener">Google's Web.dev</a>, etc. I got the bug!</li>
                        <li>In 2023 I was accepted into a "digital skills" government program, and took a 3 month JavaScript bootcamp-style course at <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a>.</li>
                        <li>After that I took the React course at <a href="https://scrimba.com" target="_blank">Scrimba</a>. Now, I'm working my way through their front-end developer career path, and learning to use NextJS on the side.</li>
                        <li>I really enjoy front-end and I'm very interested to learn new frameworks, but hopefully some back-end technologies soon.</li>
                        <li>Aside from coding, I love art and design, cool fonts, video games (narrative, stealth, wacky physics), early internet history, 90s emo and pop, house plants, crosswords and logic puzzles, baking, and embroidery.</li>
                    </ul>
                </div>

            </div>

        </main>
        
    )
}

