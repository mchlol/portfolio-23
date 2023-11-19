import React from "react";
import SparksSmall from '../assets/sparks-small.png'
import { FaFigma } from "react-icons/fa6";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiVisualstudio, DiGit, DiGithubBadge } from "react-icons/di";
import { SiNextdotjs, SiDaisyui, SiTailwindcss, SiWordpress, SiNotion, SiNetlify } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";


export default function Hero() {
    return (
<>
    <div className="hero">
        
        <div className="hero--content">

            <div className="hero--text">
                <h1>Hello! 👋
                <br />
                I'm <span className="text-outline">Michelle</span>
                </h1>
                <img className="sparks" src={SparksSmall} alt="sparkles"/>

                <h2>I'm a front-end developer in Melbourne, Australia.</h2>

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
                    <span><FiTerminal /> iTerm</span>
                    <span><FaFigma /> Figma</span>
                    <span><SiNotion /> Notion</span>
                    <span><SiNetlify /> Netlify</span>
                    <span><SiWordpress /> WordPress</span>
                    <span><SiNextdotjs /> Next</span>
                </div>
                
            </div>
            
        </div>

    </div>
</>
    )
}