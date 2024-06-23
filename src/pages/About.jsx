import React from "react";
import LaserEyes from "../assets/lasereyes.png"
import ScrollToTop from '../components/ScrollToTop';
import Sparks from '../components/Sparks'

export default function About() {

    return (
        <main className="about-section">
        <ScrollToTop />
            
            <h2 className="section-header">About</h2>

            <div className="about-section-content">

                <div className="about-img-container">

                    <img 
                    className="about-img" 
                    src={LaserEyes} 
                    alt="Michelle in Carlton Gardens" 
                    width="325px"
                    height="303px"
                    />

                <div className="about-svg-container">
                    <Sparks />
                </div>

                </div>
                
                <div className="about-section-text">
                    <h3>What is a mchlol?</h3>
                    <p>As a teen, I ventured into web design armed with Notepad, Microsoft FrontPage, and of course GeoCities. Despite basically growing up on the computer I didn't think I was smart enough to even consider it as a career!</p>
                    <p>In my day job working in print many years later, amid wrangling stakeholders and spreadsheets, I got tired of the many issues annoying me about the company website and took it over myself. This reignited a passion for web design,and I thought, "why not give coding a crack?" (Me and everyone else, but I didn't know this at the time and nevertheless, I forge ahead!)<br/> 
                    This trail lead through The Odin Project, JavaScript development at General Assembly and Scrimba's Front End Developer Career Path.</p> 
                    <p>Now knee-deep in code, I'm exploring APIs, NextJS, Node, Python, and beyond.<br />
                    I love to learn and I love the web. 🤝 </p>
                    <p>Aside from my many half-baked coding projects, I dabble in <em>apprendre à parler français</em>, font appreciation, gaming, baking and the occasional embroidery.</p>
                    <p>This humble site is built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">React Router</a>, <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer">Sanity CMS</a> (for the blog), and a sprinkle of <a href="https://www.framer.com/motion" target="_blank" rel="noopener noreferrer">Framer Motion</a>. </p>
                </div>

            </div>

        </main>
        
    )
}

