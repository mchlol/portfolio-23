import React from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiVisualstudio, DiGit, DiGithubBadge } from "react-icons/di";
import { SiDaisyui, SiTailwindcss, SiWordpress, SiNotion, SiNetlify, SiVite, SiNextdotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FiTerminal } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Hero() {

    const [spinning, setSpinning] = React.useState();
    
    function toggleSpin() {
        setSpinning(prevSpinning => !prevSpinning);
    }
    
    const allClasses = ['hero--svg-container', 'spinning'];


    return (
<>
    <div className="hero">
        
        <div className="hero--content">

            <header className="hero--text">
                <h1>Hello! <span className="gradient-text">Salut!</span></h1>
                <h2>I'm <span className="text-outline">Michelle</span></h2>

                <div className={`${spinning ? "svg-container spinning" : "svg-container spinning spinning-paused"}`}
                onClick={toggleSpin}>
                <svg width="65" height="75" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.5559 35.2985L56.6101 37.303C49.3503 39.1361 43.6758 46.0529 42.1705 54.9095L40.5279 64.5969L38.8854 54.9095C37.3801 46.0529 31.7056 39.1361 24.442 37.303L16.5 35.2985L24.442 33.2939C31.7056 31.4609 37.3801 24.5402 38.8854 15.6874L40.5279 6L42.1705 15.6874C43.6758 24.5402 49.3503 31.4609 56.6101 33.2939L64.5559 35.2985Z" fill="#D9D9D9"/>
                    <path d="M23 61.6854L17.2897 62.2628C14.5733 62.7897 12.4521 64.7833 11.8905 67.3312L11.2751 75L10.6598 67.3312C10.0982 64.7833 7.97694 62.7897 5.26053 62.2628L0 61.6854L5.26053 61.108C7.97694 60.5811 10.0982 58.5875 10.6598 56.0376L11.2751 46L11.8905 56.0376C12.4521 58.5875 14.5733 60.5811 17.2897 61.108L23 61.6854Z" fill="#D9D9D9"/>
                    <path d="M18.3932 8.32689L16.3467 8.89853C14.4717 9.42063 13.0083 11.3871 12.6196 13.9023L12.1966 16.6576L11.7736 13.9023C11.3848 11.3871 9.92145 9.42063 8.05028 8.89853L6 8.32689L8.05028 7.75906C9.92145 7.23696 11.3848 5.27052 11.7736 2.75149L12.1966 0L12.6196 2.75149C13.0083 5.27052 14.4717 7.23696 16.3467 7.75906L18.3932 8.32689Z" fill="#D9D9D9"/>
                </svg>

                </div>

                <p style={ {fontSize: "1.5rem"}}>I'm a front-end developer in Melbourne, Australia.</p>

            </header>
            

            <div className="hero--links align">
                <Link to="/about"><button>Learn more about me</button></Link>
                
                <Link to="/projects"><button>See some things I've made</button></Link>
            </div>

            <div className="tools-container">
                <h3>Tools & Technologies</h3>

                <div className="tools-container-icons">
                    <span><DiHtml5 /> HTML5</span>
                    <span><DiCss3 /> CSS3</span>
                    <span><DiJsBadge /> JavaScript</span>
                    <span><DiReact /> React</span>
                    <span><SiTailwindcss /> TailwindCSS</span>
                    <span><SiDaisyui /> DaisyUI</span>
                    <span><DiGit /> Git</span>
                    <span><DiGithubBadge /> GitHub</span>
                    <span><DiVisualstudio /> VS Code</span>
                </div>
                {/* <br />
                <div className="tools-container-icons tools-secondary">
                    <span> <SiVite /> Vite</span>
                    <span><FiTerminal /> iTerm</span>
                    <span><FaFigma /> Figma</span>
                    <span><SiNotion /> Notion</span>
                    <span><SiNetlify /> Netlify</span>
                    <span><SiWordpress /> WordPress</span>
                    <span><SiNextdotjs /> Next</span>
                </div> */}
                
            </div>
            
        </div>

    </div>
</>
    )
}